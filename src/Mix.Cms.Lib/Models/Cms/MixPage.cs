﻿using System;
using System.Collections.Generic;

namespace Mix.Cms.Lib.Models.Cms
{
    public partial class MixPage
    {
        public MixPage()
        {
            MixPageArticle = new HashSet<MixPageArticle>();
            MixPageAttributeData = new HashSet<MixPageAttributeData>();
            MixPageModule = new HashSet<MixPageModule>();
            MixPagePageMixPage = new HashSet<MixPagePage>();
            MixPagePageMixPageNavigation = new HashSet<MixPagePage>();
            MixPagePosition = new HashSet<MixPagePosition>();
            MixPageProduct = new HashSet<MixPageProduct>();
        }

        public int Id { get; set; }
        public string Specificulture { get; set; }
        public int? SetAttributeId { get; set; }
        public string SetAttributeData { get; set; }
        public string Content { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public string CssClass { get; set; }
        public string Excerpt { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
        public DateTime? LastModified { get; set; }
        public string Layout { get; set; }
        public int? Level { get; set; }
        public string ModifiedBy { get; set; }
        public int Priority { get; set; }
        public string SeoDescription { get; set; }
        public string SeoKeywords { get; set; }
        public string SeoName { get; set; }
        public string SeoTitle { get; set; }
        public string StaticUrl { get; set; }
        public int Status { get; set; }
        public string Tags { get; set; }
        public string Template { get; set; }
        public string Title { get; set; }
        public int Type { get; set; }
        public int? Views { get; set; }
        public int? PageSize { get; set; }
        public string ExtraFields { get; set; }

        public virtual MixAttributeSet SetAttribute { get; set; }
        public virtual MixSetAttribute SetAttributeNavigation { get; set; }
        public virtual MixCulture SpecificultureNavigation { get; set; }
        public virtual ICollection<MixPageArticle> MixPageArticle { get; set; }
        public virtual ICollection<MixPageAttributeData> MixPageAttributeData { get; set; }
        public virtual ICollection<MixPageModule> MixPageModule { get; set; }
        public virtual ICollection<MixPagePage> MixPagePageMixPage { get; set; }
        public virtual ICollection<MixPagePage> MixPagePageMixPageNavigation { get; set; }
        public virtual ICollection<MixPagePosition> MixPagePosition { get; set; }
        public virtual ICollection<MixPageProduct> MixPageProduct { get; set; }
    }
}
