﻿using Microsoft.AspNetCore.Http;
using Mix.Cms.Lib.Constants;
using Mix.Cms.Lib.Services;
using Mix.Common.Helper;
using Mix.Domain.Core.ViewModels;
using Mix.Services;
using Newtonsoft.Json.Linq;
using System;
using System.Threading.Tasks;

namespace Mix.Cms.Lib.ViewModels.MixThemes
{
    public class Helper
    {
        public static async Task<RepositoryResponse<string>> ExportTheme(
            int id, SiteStructureViewModel data,
            string culture, string scheme, string host)
        {
            var getTheme = await ReadViewModel.Repository.GetSingleModelAsync(
                 theme => theme.Id == id).ConfigureAwait(false);

            //path to temporary folder
            string tempPath = $"{MixFolders.WebRootPath}/{MixFolders.ExportFolder}/Themes/{getTheme.Data.Name}/temp";
            string outputPath = $"{MixFolders.ExportFolder}/Themes/{getTheme.Data.Name}";
            data.ThemeName = getTheme.Data.Name;
            data.Specificulture = culture;
            var result = data.ExportSelectedItemsAsync();
            if (result.IsSucceed)
            {
                string domain = MixService.GetConfig<string>(MixAppSettingKeywords.Domain);
                string accessFolder = $"{MixFolders.SiteContentAssetsFolder}/{getTheme.Data.Name}/assets";
                string content = JObject.FromObject(data).ToString()
                    .Replace(accessFolder, "[ACCESS_FOLDER]")
                    .Replace($"/{culture}/", "/[CULTURE]/")
                    .Replace($"/{data.ThemeName}/", "/[THEME_NAME]/");
                if (!string.IsNullOrEmpty(domain))
                {
                    content = content.Replace(domain, string.Empty);
                }
                string filename = $"schema";
                var file = new FileViewModel()
                {
                    Filename = filename,
                    Extension = MixFileExtensions.Json,
                    FileFolder = $"{tempPath}/Data",
                    Content = content
                };

                // Delete Existing folder
                MixFileRepository.Instance.DeleteWebFolder(outputPath);
                // Copy current templates file
                MixFileRepository.Instance.CopyDirectory($"{getTheme.Data.TemplateFolder}", $"{tempPath}/Templates");
                // Copy current assets files
                MixFileRepository.Instance.CopyDirectory($"{MixFolders.WebRootPath}/{getTheme.Data.AssetFolder}", $"{tempPath}/Assets");
                // Copy current uploads files
                MixFileRepository.Instance.CopyDirectory($"{MixFolders.WebRootPath}/{getTheme.Data.UploadsFolder}", $"{tempPath}/Uploads");
                // Save Site Structures
                MixFileRepository.Instance.SaveFile(file);

                // Zip to [theme_name].zip ( wwwroot for web path)
                string filePath = MixFileRepository.Instance.ZipFolder($"{tempPath}", outputPath, $"{getTheme.Data.Name}-{Guid.NewGuid()}");

                // Delete temp folder
                MixFileRepository.Instance.DeleteWebFolder($"{outputPath}/Assets");
                MixFileRepository.Instance.DeleteWebFolder($"{outputPath}/Uploads");
                MixFileRepository.Instance.DeleteWebFolder($"{outputPath}/Templates");
                MixFileRepository.Instance.DeleteWebFolder($"{outputPath}/Data");

                return new RepositoryResponse<string>()
                {
                    IsSucceed = !string.IsNullOrEmpty(outputPath),
                    Data = $"{scheme}://{host}/{filePath}"
                };
            }
            else
            {
                return result;
            }
        }

        public static async Task<RepositoryResponse<InitViewModel>> InitTheme(string model, string userName, string culture, IFormFile assets, IFormFile theme)
        {
            var json = JObject.Parse(model);
            var data = json.ToObject<Lib.ViewModels.MixThemes.InitViewModel>();
            if (data != null)
            {
                data.CreatedBy = userName;
                string importFolder = $"{MixFolders.ImportFolder}/" +
                    $"{DateTime.UtcNow.ToString("dd-MM-yyyy")}";
                if (theme != null)
                {
                    MixFileRepository.Instance.SaveWebFile(theme, $"{importFolder}");
                    data.TemplateAsset = new FileViewModel(theme, importFolder);
                }
                else
                {
                    if (data.IsCreateDefault)
                    {
                        data.TemplateAsset = new FileViewModel()
                        {
                            Filename = "default",
                            Extension = MixFileExtensions.Zip,
                            FileFolder = MixFolders.ImportFolder
                        };
                    }
                    else
                    {
                        data.TemplateAsset = new FileViewModel()
                        {
                            Filename = "default_blank",
                            Extension = MixFileExtensions.Zip,
                            FileFolder = MixFolders.ImportFolder
                        };
                    }
                }

                data.Title = MixService.GetConfig<string>(MixAppSettingKeywords.SiteName, culture);
                data.Name = SeoHelper.GetSEOString(data.Title);
                data.Specificulture = culture;
                var result = await data.SaveModelAsync(true);
                if (result.IsSucceed)
                {
                    // MixService.SetConfig<string>(MixAppSettingKeywords.SiteName, _lang, data.Title);
                    MixService.LoadFromDatabase();
                    MixService.SetConfig("InitStatus", 3);
                    MixService.SetConfig("IsInit", false);
                    MixService.SaveSettings();
                    _ = Mix.Services.CacheService.RemoveCacheAsync();
                    MixService.Reload();
                }
                return result;
            }
            return new RepositoryResponse<InitViewModel>();
        }
    }
}