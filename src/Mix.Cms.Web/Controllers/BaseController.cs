﻿using AutoMapper.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Rendering;
using Mix.Cms.Lib;
using Mix.Cms.Lib.Models.Cms;
using Mix.Cms.Lib.Services;
using Mix.Domain.Core.ViewModels;
using Newtonsoft.Json.Linq;
using System;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using static Mix.Cms.Lib.MixEnums;

namespace Mix.Cms.Web.Controllers
{
    public class BaseController : Controller
    {
        protected string domain;
        protected bool forbidden = false;
        protected bool isValid = true;
        protected string _redirectUrl;

        protected bool _forbiddenPortal {
            get {
                var allowedIps = MixService.GetIpConfig<JArray>("AllowedPortalIps") ?? new JArray();
                string remoteIp = Request.HttpContext?.Connection?.RemoteIpAddress?.ToString();
                return forbidden || (
                    // allow localhost
                    //remoteIp != "::1" &&
                    (
                        allowedIps.Count > 0 &&
                        !allowedIps.Any(t => t["text"].Value<string>() == remoteIp)
                    )
                );
            }
        }

        protected IConfiguration _configuration;

        public BaseController()
        {
            // Set CultureInfo
            var cultureInfo = new CultureInfo(culture);
            CultureInfo.DefaultThreadCurrentCulture = cultureInfo;
            CultureInfo.DefaultThreadCurrentUICulture = cultureInfo;
        }

        public ViewContext ViewContext { get; set; }
        private string _culture;

        public string culture {
            get {
                return RouteData?.Values["culture"]?.ToString().ToLower()
                    ?? _culture
                    ?? MixService.GetConfig<string>("DefaultCulture");
            }
            set { _culture = value; }
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            ValidateRequest();
            ViewBag.culture = culture;
            if (!string.IsNullOrEmpty(culture))
            {
                ViewBag.assetFolder = MixCmsHelper.GetAssetFolder(culture);
            }
            domain = string.Format("{0}://{1}", Request.Scheme, Request.Host);
            if (MixService.GetIpConfig<bool>("IsRetrictIp"))
            {
                var allowedIps = MixService.GetIpConfig<JArray>("AllowedIps") ?? new JArray();
                var exceptIps = MixService.GetIpConfig<JArray>("ExceptIps") ?? new JArray();
                string remoteIp = Request.HttpContext?.Connection?.RemoteIpAddress?.ToString();
                if (
                        // To allow localhost remove below comment
                        //remoteIp != "::1" &&
                        allowedIps.Count > 0 &&
                        !allowedIps.Any(t => t["text"].Value<string>() == remoteIp) ||
                        (
                            exceptIps.Count > 0 &&
                            exceptIps.Any(t => t["text"].Value<string>() == remoteIp)
                        )
                    )
                {
                    forbidden = true;
                }
            }
        }

        protected virtual void ValidateRequest()
        {
            // If IP retricted in appsettings
            if (forbidden)
            {
                isValid = false;
                _redirectUrl = $"/error/403";
            }

            // If mode Maintenance enabled in appsettings
            if (MixService.GetConfig<bool>("IsMaintenance") && Request.RouteValues["seoName"].ToString() != "maintenance")
            {
                isValid = false;
                _redirectUrl = $"/maintenance";
            }
        }

        #region Helper

        protected async Task<IActionResult> AliasAsync(string seoName)
        {
            // Home Page

            // If page name is null => return home page
            if (string.IsNullOrEmpty(seoName))
            {
                return await Page(seoName);
            }
            else
            {
                RepositoryResponse<Lib.ViewModels.MixUrlAliases.UpdateViewModel> getAlias = null;

                Expression<Func<MixUrlAlias, bool>> predicate;

                predicate = p =>
                p.Alias == seoName
                && p.Status == MixContentStatus.Published.ToString() && p.Specificulture == culture;

                getAlias = await Lib.ViewModels.MixUrlAliases.UpdateViewModel.Repository.GetFirstModelAsync(predicate);
                if (getAlias.IsSucceed)// && getPage.Data.View != null
                {
                    switch (getAlias.Data.Type)
                    {
                        case UrlAliasType.Page:
                            return await Page(int.Parse(getAlias.Data.SourceId));

                        case UrlAliasType.Post:
                            return await Post(int.Parse(getAlias.Data.SourceId));

                        case UrlAliasType.Module: // TODO: Create view for module
                        case UrlAliasType.ModuleData: // TODO: Create view for module data
                        default:
                            return await Page(0);
                    }
                }
                else
                {
                    return await Page(seoName);
                }
            }
        }

        protected async System.Threading.Tasks.Task<IActionResult> Page(string seoName)
        {
            // Home Page
            int maxPageSize = MixService.GetConfig<int>("MaxPageSize");
            string orderBy = MixService.GetConfig<string>("OrderBy");
            int orderDirection = MixService.GetConfig<int>("OrderDirection");
            int.TryParse(Request.Query["page"], out int page);
            int.TryParse(Request.Query["pageSize"], out int pageSize);
            pageSize = (pageSize > 0 && pageSize < maxPageSize) ? pageSize : maxPageSize;

            RepositoryResponse<Lib.ViewModels.MixPages.ReadMvcViewModel> getPage = null;
            Expression<Func<MixPage, bool>> predicate;

            if (string.IsNullOrEmpty(seoName))
            {
                predicate = p =>
                p.Type == MixPageType.Home.ToString()
                && p.Status == MixContentStatus.Published.ToString() && p.Specificulture == culture;
            }
            else
            {
                predicate = p =>
                p.SeoName == seoName
                && p.Status == MixContentStatus.Published.ToString() && p.Specificulture == culture;
            }

            getPage = await Lib.ViewModels.MixPages.ReadMvcViewModel.Repository.GetFirstModelAsync(predicate);

            if (getPage.IsSucceed)
            {
                if (getPage.Data != null)
                {
                    getPage.Data.LoadData(pageSize: pageSize, pageIndex: page - 1);
                }
                GeneratePageDetailsUrls(getPage.Data);
            }

            if (getPage.IsSucceed)
            {
                ViewData["Title"] = getPage.Data.SeoTitle;
                ViewData["Description"] = getPage.Data.SeoDescription;
                ViewData["Keywords"] = getPage.Data.SeoKeywords;
                ViewData["Image"] = getPage.Data.ImageUrl;
                ViewData["PageClass"] = getPage.Data.CssClass;
                getPage.LastUpdateConfiguration = MixService.GetConfig<DateTime?>("LastUpdateConfiguration");
                return View(getPage.Data);
            }
            else
            {
                if (seoName != "404")
                {
                    return await Page("404");
                }
                else
                {
                    return NotFound();
                }
            }
        }

        protected async System.Threading.Tasks.Task<IActionResult> Page(int pageId)
        {
            // Home Page
            int? pageSize = MixService.GetConfig<int?>("TagPageSize");
            string orderBy = MixService.GetConfig<string>("OrderBy");
            int orderDirection = MixService.GetConfig<int>("OrderDirection");
            int.TryParse(Request.Query["page"], out int page);
            RepositoryResponse<Lib.ViewModels.MixPages.ReadMvcViewModel> getPage = null;

            Expression<Func<MixPage, bool>> predicate;

            predicate = p =>
            p.Id == pageId
            && p.Status == MixContentStatus.Published.ToString() && p.Specificulture == culture;

            getPage = await Lib.ViewModels.MixPages.ReadMvcViewModel.Repository.GetFirstModelAsync(predicate);
            if (getPage.IsSucceed)
            {
                getPage.Data.LoadData(pageIndex: page - 1, pageSize: pageSize);
                GeneratePageDetailsUrls(getPage.Data);
                //_ = MixCacheService.SetAsync(cacheKey, getPage);
            }

            if (getPage.IsSucceed)
            {
                ViewData["Title"] = getPage.Data.SeoTitle;
                ViewData["Description"] = getPage.Data.SeoDescription;
                ViewData["Keywords"] = getPage.Data.SeoKeywords;
                ViewData["Image"] = getPage.Data.ImageUrl;
                ViewData["PageClass"] = getPage.Data.CssClass;
                ViewData["Layout"] = getPage.Data.Layout ?? "Masters/_Layout";
                getPage.LastUpdateConfiguration = MixService.GetConfig<DateTime?>("LastUpdateConfiguration");
                return View(getPage.Data);
            }
            else
            {
                return await Page("404");
            }
        }

        protected async System.Threading.Tasks.Task<IActionResult> Post(int id)
        {
            RepositoryResponse<Lib.ViewModels.MixPosts.ReadMvcViewModel> getPost = null;
            var cacheKey = $"mvc_{culture}_post_{id}";
            if (MixService.GetConfig<bool>("IsCache"))
            {
                getPost = await MixCacheService.GetAsync<RepositoryResponse<Lib.ViewModels.MixPosts.ReadMvcViewModel>>(cacheKey);
            }
            if (getPost == null)
            {
                Expression<Func<MixPost, bool>> predicate;
                predicate = p =>
                p.Id == id
                && p.Status == MixContentStatus.Published.ToString()
                && p.Specificulture == culture;

                getPost = await Lib.ViewModels.MixPosts.ReadMvcViewModel.Repository.GetFirstModelAsync(predicate);
            }

            if (getPost.IsSucceed)
            {
                ViewData["Title"] = getPost.Data.SeoTitle;
                ViewData["Description"] = getPost.Data.SeoDescription;
                ViewData["Keywords"] = getPost.Data.SeoKeywords;
                ViewData["Image"] = getPost.Data.ImageUrl;
                getPost.LastUpdateConfiguration = MixService.GetConfig<DateTime?>("LastUpdateConfiguration");
                return View(getPost.Data);
            }
            else
            {
                return await Page("404");
            }
        }

        protected async System.Threading.Tasks.Task<IActionResult> Module(int id)
        {
            // Home Page
            int? pageSize = MixService.GetConfig<int?>("TagPageSize");
            string orderBy = MixService.GetConfig<string>("OrderBy");
            int orderDirection = MixService.GetConfig<int>("OrderDirection");
            int.TryParse(Request.Query["page"], out int page);
            RepositoryResponse<Lib.ViewModels.MixModules.ReadMvcViewModel> getData = null;

            Expression<Func<MixModule, bool>> predicate;

            predicate = p =>
            p.Id == id
            && p.Status == MixContentStatus.Published.ToString() && p.Specificulture == culture;

            getData = await Lib.ViewModels.MixModules.ReadMvcViewModel.Repository.GetFirstModelAsync(predicate);
            if (getData.IsSucceed)
            {
                getData.Data.LoadData(pageIndex: page - 1, pageSize: pageSize);
                getData.Data.DetailsUrl = GenerateDetailsUrl(
                    new { culture = culture, seoName = getData.Data.Name }
                    );
                GenerateDetailsUrls(getData.Data);
                //_ = MixCacheService.SetAsync(cacheKey, getPage);
            }

            if (getData.IsSucceed)
            {
                ViewData["Title"] = getData.Data.Title;
                ViewData["Description"] = getData.Data.Description;
                ViewData["Keywords"] = getData.Data.Title;
                ViewData["Image"] = getData.Data.ImageUrl;
                getData.LastUpdateConfiguration = MixService.GetConfig<DateTime?>("LastUpdateConfiguration");
                return View(getData.Data);
            }
            else
            {
                return await Page("404");
            }
        }

        protected void GeneratePageDetailsUrls(Lib.ViewModels.MixPages.ReadMvcViewModel page)
        {
            if (page.Modules != null)
            {
                foreach (var nav in page.Modules)
                {
                    GenerateDetailsUrls(nav.Module);
                }
            }
        }

        protected void GenerateDetailsUrls(Lib.ViewModels.MixModules.ReadMvcViewModel module)
        {
            module.DetailsUrl = GenerateDetailsUrl(
                            new { action = "module", culture = culture, id = module.Id, seoName = module.Name }
                            );
        }

        protected string GenerateDetailsUrl(object routeValues)
        {
            return MixCmsHelper.GetRouterUrl(routeValues, Request, Url);
        }

        public async System.Threading.Tasks.Task<IActionResult> Error(string page = "404")
        {
            return await Page(page);
        }

        #endregion Helper
    }
}