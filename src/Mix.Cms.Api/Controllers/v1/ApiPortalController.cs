﻿// Licensed to the Mixcore Foundation under one or more agreements.
// The Mixcore Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Mix.Cms.Lib;
using Mix.Cms.Lib.Constants;
using Mix.Cms.Lib.Enums;
using Mix.Cms.Lib.Helpers;
using Mix.Cms.Lib.Models.Cms;
using Mix.Cms.Lib.Repositories;
using Mix.Cms.Lib.Services;
using Mix.Cms.Lib.ViewModels;
using Mix.Common.Helper;
using Mix.Domain.Core.ViewModels;
using Mix.Heart.Helpers;
using Mix.Identity.Models;
using Mix.Services;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mix.Cms.Api.Controllers.v1
{
    [Produces("application/json")]
    [Route("api/v1/portal")]
    public class ApiPortalController :
        BaseApiController<MixCmsContext>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public ApiPortalController(
           UserManager<ApplicationUser> userManager,
           SignInManager<ApplicationUser> signInManager,
           RoleManager<IdentityRole> roleManager,
           MixCmsContext context,
            Microsoft.AspNetCore.SignalR.IHubContext<Mix.Cms.Service.SignalR.Hubs.PortalHub> hubContext,
            IMemoryCache memoryCache
            )
            : base(context, memoryCache, hubContext)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }

        #region Get

        // GET api/category/id
        [AllowAnonymous]
        [HttpGet, HttpOptions]
        [Route("{culture}/settings")]
        [Route("settings")]
        public RepositoryResponse<GlobalSettingsViewModel> Settings()
        {
            var cultures = CommonRepository.Instance.LoadCultures();
            var culture = cultures.FirstOrDefault(c => c.Specificulture == _lang);
            GlobalSettingsViewModel settings = new GlobalSettingsViewModel()
            {
                Domain = MixService.GetConfig<string>(MixAppSettingKeywords.Domain),
                Lang = _lang,
                PortalThemeSettings = MixService.GetConfig<JObject>(MixAppSettingKeywords.PortalThemeSettings),
                ThemeId = MixService.GetConfig<int>(MixAppSettingKeywords.ThemeId, _lang),
                Cultures = cultures,
                PageTypes = CommonHelper.ParseEnumToObject(typeof(MixPageType)),
                ModuleTypes = CommonHelper.ParseEnumToObject(typeof(MixModuleType)),
                MixDatabaseTypes = CommonHelper.ParseEnumToObject(typeof(MixDatabaseType)),
                DataTypes = CommonHelper.ParseEnumToObject(typeof(MixDataType)),
                Statuses = CommonHelper.ParseEnumToObject(typeof(MixContentStatus)),
                LastUpdateConfiguration = MixService.GetConfig<DateTime?>("LastUpdateConfiguration")
            };
            settings.LangIcon = culture?.Icon ?? MixService.GetConfig<string>("Language");
            return new RepositoryResponse<GlobalSettingsViewModel>()
            {
                IsSucceed = true,
                Data = settings
            };
        }

        // GET api/category/id
        [AllowAnonymous]
        [HttpGet, HttpOptions]
        [Route("{culture}/all-settings")]
        [Route("all-settings")]
        public RepositoryResponse<JObject> AllSettingsAsync()
        {
            return GetAllSettings();
        }

        [AllowAnonymous]
        [HttpGet, HttpOptions]
        [Route("jarray-data/{name}")]
        public RepositoryResponse<JArray> loadData(string name)
        {
            try
            {
                var cultures = MixFileRepository.Instance.GetFile(name, MixFolders.JsonDataFolder, true, "[]");
                var obj = JObject.Parse(cultures.Content);
                return new RepositoryResponse<JArray>()
                {
                    IsSucceed = true,
                    Data = obj["data"] as JArray
                };
            }
            catch
            {
                return new RepositoryResponse<JArray>()
                {
                    IsSucceed = true,
                    Data = null
                };
            }
        }

        [AllowAnonymous]
        [HttpGet, HttpOptions]
        [Route("json-data/{name}")]
        public RepositoryResponse<JObject> loadJsonData(string name)
        {
            var cultures = MixFileRepository.Instance.GetFile(name, MixFolders.JsonDataFolder, true, "{}");
            var obj = JObject.Parse(cultures.Content);
            return new RepositoryResponse<JObject>()
            {
                IsSucceed = true,
                Data = obj["data"] as JObject
            };
        }

        // GET api/category/id
        [HttpGet, HttpOptions]
        [Route("{culture}/translator")]
        [Route("translator")]
        public RepositoryResponse<JObject> Languages()
        {
            return new RepositoryResponse<JObject>()
            {
                IsSucceed = true,
                Data = MixService.GetTranslator(_lang)
            };
        }

        // GET api/configurations/id
        [AllowAnonymous]
        [HttpGet, HttpOptions]
        [Route("{culture}/global-settings")]
        [Route("global-settings")]
        public RepositoryResponse<JObject> GetGlobalSettings()
        {
            var cultures = CommonRepository.Instance.LoadCultures();
            var culture = cultures.FirstOrDefault(c => c.Specificulture == _lang);

            // Get Settings
            GlobalSettingsViewModel configurations = new GlobalSettingsViewModel()
            {
                Domain = MixService.GetConfig<string>(MixAppSettingKeywords.Domain),
                Lang = _lang,
                PortalThemeSettings = MixService.GetConfig<JObject>(MixAppSettingKeywords.PortalThemeSettings),
                ThemeId = MixService.GetConfig<int>(MixAppSettingKeywords.ThemeId, _lang),
                ApiEncryptKey = MixService.GetConfig<string>(MixAppSettingKeywords.ApiEncryptKey),
                ApiEncryptIV = MixService.GetConfig<string>(MixAppSettingKeywords.ApiEncryptIV),
                IsEncryptApi = MixService.GetConfig<bool>(MixAppSettingKeywords.IsEncryptApi),
                Cultures = cultures,
                PageTypes = CommonHelper.ParseEnumToObject(typeof(MixPageType)),
                ModuleTypes = CommonHelper.ParseEnumToObject(typeof(MixModuleType)),
                MixDatabaseTypes = CommonHelper.ParseEnumToObject(typeof(MixDatabaseType)),
                DataTypes = CommonHelper.ParseEnumToObject(typeof(MixDataType)),
                Statuses = CommonHelper.ParseEnumToObject(typeof(MixContentStatus)),
                LastUpdateConfiguration = MixService.GetConfig<DateTime?>("LastUpdateConfiguration")
            };

            configurations.LangIcon = culture?.Icon ?? MixService.GetConfig<string>("Language");
            return new RepositoryResponse<JObject>()
            {
                IsSucceed = true,
                Data = JObject.FromObject(configurations)
            };
        }

        // GET api/category/id
        [HttpGet, HttpOptions]
        [Route("{culture}/dashboard")]
        public RepositoryResponse<DashboardViewModel> Dashboard(string culture)
        {
            return new RepositoryResponse<DashboardViewModel>()
            {
                IsSucceed = true,
                Data = new DashboardViewModel(culture)
            };
        }

        // GET api/v1/portal/check-config
        [AllowAnonymous]
        [HttpGet, HttpOptions]
        [Route("check-config/{lastSync}")]
        public RepositoryResponse<JObject> checkConfig(DateTime lastSync)
        {
            var lastUpdate = MixService.GetConfig<DateTime>("LastUpdateConfiguration");
            if (lastSync.ToUniversalTime() < lastUpdate)
            {
                return GetAllSettings();
            }
            else
            {
                return new RepositoryResponse<JObject>()
                {
                    IsSucceed = true,
                };
            }
        }

        // GET api/category/id
        [HttpGet, HttpOptions]
        [Route("sitemap")]
        public async Task<RepositoryResponse<FileViewModel>> SiteMapAsync()
        {
            return await SitemapService.ParseSitemapAsync();
        }

        // GET
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "SuperAdmin, Admin")]
        [HttpGet, HttpOptions]
        [Route("app-settings/details")]
        public RepositoryResponse<JObject> LoadAppSettings()
        {
            var settings = MixFileRepository.Instance.GetFile("appsettings", MixFileExtensions.Json, string.Empty, true, "{}");
            return new RepositoryResponse<JObject>() { IsSucceed = true, Data = JObject.Parse(settings.Content) };
        }

        // GET api/category/id
        [HttpGet, HttpOptions]
        [Route("translate-url/{culture}/{type}/{id}")]
        public async Task<RepositoryResponse<string>> TranslateUrlAsync(string culture, string type, int id)
        {
            switch (type)
            {
                case "Post":
                    var getPost = await Lib.ViewModels.MixPosts.ReadListItemViewModel.Repository.GetSingleModelAsync(
                        a => a.Id == id && a.Specificulture == culture);
                    if (getPost.IsSucceed)
                    {
                        return new RepositoryResponse<string>()
                        {
                            IsSucceed = getPost.IsSucceed,
                            Data = MixCmsHelper.GetRouterUrl(new { action = "post", culture = _lang, id = getPost.Data.Id, getPost.Data.SeoName }, Request, Url)
                        };
                    }
                    else
                    {
                        return new RepositoryResponse<string>()
                        {
                            IsSucceed = getPost.IsSucceed,
                            Data = $"/{culture}"
                        };
                    }

                case "Page":
                    var getPage = await Lib.ViewModels.MixPages.ReadListItemViewModel.Repository.GetSingleModelAsync(
                        a => a.Id == id && a.Specificulture == culture);
                    if (getPage.IsSucceed)
                    {
                        return new RepositoryResponse<string>()
                        {
                            IsSucceed = getPage.IsSucceed,
                            Data = MixCmsHelper.GetRouterUrl(
                                new { culture = _lang, seoName = getPage.Data.SeoName }, Request, Url)
                        };
                    }
                    else
                    {
                        return new RepositoryResponse<string>()
                        {
                            IsSucceed = true,
                            Data = $"/{culture}"
                        };
                    }
                default:
                    return new RepositoryResponse<string>()
                    {
                        IsSucceed = true,
                        Data = $"/{culture}"
                    };
            }
        }

        #endregion Get

        #region Post

        [AllowAnonymous]
        [HttpPost, HttpOptions]
        [Route("encrypt-rsa")]
        public RepositoryResponse<string> EncryptRsa([FromBody] JObject model)
        {
            string data = model.GetValue("data").Value<string>();
            return new RepositoryResponse<string>()
            {
                Data = RSAEncryptionHelper.GetEncryptedText(data)
            };
        }

        [AllowAnonymous]
        [HttpPost, HttpOptions]
        [Route("decrypt-rsa")]
        public RepositoryResponse<string> DecryptRsa([FromBody] JObject model)
        {
            string data = model.GetValue("data").Value<string>();
            return new RepositoryResponse<string>()
            {
                Data = Lib.Helpers.RSAEncryptionHelper.GetDecryptedText(data)
            };
        }

        [AllowAnonymous]
        [HttpPost, HttpOptions]
        [Route("encrypt")]
        public RepositoryResponse<string> Encrypt([FromBody] JObject model)
        {
            string data = model.GetValue("data").Value<string>();
            var encrypted = new JObject(new JProperty("encrypted", data));
            var key = System.Text.Encoding.UTF8.GetBytes("sw-cms-secret-key");
            return new RepositoryResponse<string>()
            {
                Data = AesEncryptionHelper.EncryptString(data, Convert.ToBase64String(key))
            };
        }

        [AllowAnonymous]
        [HttpPost, HttpOptions]
        [Route("decrypt")]
        public RepositoryResponse<string> Decrypt([FromBody] JObject model)
        {
            string data = model.GetValue("data")?.Value<string>();
            //string key = model.GetValue("key")?.Value<string>();
            var key = System.Text.Encoding.UTF8.GetBytes("sw-cms-secret-key");
            return new RepositoryResponse<string>()
            {
                Data = AesEncryptionHelper.DecryptString(data, Convert.ToBase64String(key))
            };
        }

        // POST api/category
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "SuperAdmin, Admin")]
        [HttpPost, HttpOptions]
        [Route("app-settings/save")]
        public RepositoryResponse<JObject> SaveAppSettings([FromBody] JObject model)
        {
            var settings = MixFileRepository.Instance.GetFile("appsettings", MixFileExtensions.Json, string.Empty, true, "{}");
            if (model != null)
            {
                settings.Content = model.ToString();
                if (MixFileRepository.Instance.SaveFile(settings))
                {
                    MixService.Reload();
                    if (!MixService.GetMixConfig<bool>("IsCache"))
                    {
                        Services.CacheService.RemoveCacheAsync();
                    }
                }
                MixService.SetConfig("LastUpdateConfiguration", DateTime.UtcNow);
            }
            return new RepositoryResponse<JObject>() { IsSucceed = model != null, Data = model };
        }

        // POST api/category
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "SuperAdmin, Admin")]
        [HttpPost, HttpOptions]
        [Route("app-settings/save-global/{name}")]
        public RepositoryResponse<string> SaveGlobalSettings(string name, [FromBody] JObject model)
        {
            switch (name)
            {
                case "PortalThemeSettings":
                    MixService.SetConfig(name, model);
                    break;

                default:
                    MixService.SetConfig(name, model["value"].ToString());
                    break;
            }
            var result = MixService.SaveSettings();
            return new RepositoryResponse<string>() { IsSucceed = result };
        }

        // POST api/category
        [HttpGet, HttpOptions]
        [Route("app-settings/save-default")]
        public RepositoryResponse<bool> SaveDefaultAppSettings()
        {
            return new RepositoryResponse<bool>() { IsSucceed = true, Data = MixService.SaveSettings() };
        }

        [AllowAnonymous]
        [HttpPost, HttpOptions]
        [Route("sendmail")]
        public void SendMail([FromBody] JObject model)
        {
            MixService.SendMail(model.Value<string>("subject"), model.Value<string>("body"), MixService.GetConfig<string>("ContactEmail", _lang));
        }

        // POST api/category
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "SuperAdmin, Admin")]
        [HttpPost, HttpOptions]
        [Route("import")]
        [Route("{culture}/import")]
        public async Task<RepositoryResponse<bool>> ImportAsync([FromForm] IFormFile assets)
        {
            string importFolder = $"Imports/Structures/{_lang}";
            var result = new RepositoryResponse<bool>();
            var saveFile = MixFileRepository.Instance.SaveWebFile(assets, $"{importFolder}/{assets.FileName}");
            if (saveFile != null)
            {
                var fileContent = MixFileRepository.Instance.GetWebFile($"{saveFile.Filename}{saveFile.Extension}",
                    saveFile.FileFolder);
                var obj = JObject.Parse(fileContent.Content);
                switch (obj["type"].Value<string>())
                {
                    case "Language":
                        var arrLanguage = obj["data"].ToObject<List<MixLanguage>>();
                        result = await Lib.ViewModels.MixLanguages.UpdateViewModel.ImportLanguages(arrLanguage, _lang);
                        return result;

                    case "Configuration":
                        var arrConfiguration = obj["data"].ToObject<List<MixConfiguration>>();
                        result = await Lib.ViewModels.MixConfigurations.UpdateViewModel.ImportConfigurations(arrConfiguration, _lang);
                        return result;

                    case "Module":
                        var arrModule = obj["data"].ToObject<List<MixModule>>();
                        result = await Lib.ViewModels.MixModules.Helper.Import(arrModule, _lang);
                        return result;

                    default:
                        return new RepositoryResponse<bool>() { IsSucceed = false };
                }
            }
            return new RepositoryResponse<bool>();
        }

        #endregion Post

        #region Helpers

        private RepositoryResponse<JObject> GetAllSettings()
        {
            var cultures = CommonRepository.Instance.LoadCultures();
            var culture = cultures.FirstOrDefault(c => c.Specificulture == _lang);

            // Get Settings
            GlobalSettingsViewModel configurations = new GlobalSettingsViewModel()
            {
                Domain = MixService.GetConfig<string>(MixAppSettingKeywords.Domain),
                Lang = _lang,
                PortalThemeSettings = MixService.GetConfig<JObject>(MixAppSettingKeywords.PortalThemeSettings),
                ThemeId = MixService.GetConfig<int>(MixAppSettingKeywords.ThemeId, _lang),
                ApiEncryptKey = MixService.GetConfig<string>(MixAppSettingKeywords.ApiEncryptKey),
                ApiEncryptIV = MixService.GetConfig<string>(MixAppSettingKeywords.ApiEncryptIV),
                IsEncryptApi = MixService.GetConfig<bool>(MixAppSettingKeywords.IsEncryptApi),
                Cultures = cultures,
                PageTypes = CommonHelper.ParseEnumToObject(typeof(MixPageType)),
                ModuleTypes = CommonHelper.ParseEnumToObject(typeof(MixModuleType)),
                MixDatabaseTypes = CommonHelper.ParseEnumToObject(typeof(MixDatabaseType)),
                DataTypes = CommonHelper.ParseEnumToObject(typeof(MixDataType)),
                Statuses = CommonHelper.ParseEnumToObject(typeof(MixContentStatus)),
                LastUpdateConfiguration = MixService.GetConfig<DateTime?>("LastUpdateConfiguration")
            };

            configurations.LangIcon = culture?.Icon ?? MixService.GetConfig<string>("Language");

            // Get translator
            var translator = new JObject()
            {
                new JProperty("lang",_lang),
                new JProperty("data", MixService.GetTranslator(_lang))
            };

            // Get Configurations
            var settings = new JObject()
            {
                new JProperty("lang",_lang),
                new JProperty("langIcon",configurations.LangIcon),

                new JProperty("data", MixService.GetLocalSettings(_lang))
            };
            JObject result = new JObject()
            {
                new JProperty("globalSettings", JObject.FromObject(configurations)),
                new JProperty("translator", translator),
                new JProperty("settings", JObject.FromObject(settings))
            };

            return new RepositoryResponse<JObject>()
            {
                IsSucceed = true,
                Data = result
            };
        }

        #endregion Helpers
    }
}