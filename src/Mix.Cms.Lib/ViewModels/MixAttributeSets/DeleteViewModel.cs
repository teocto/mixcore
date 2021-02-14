﻿using Microsoft.EntityFrameworkCore.Storage;
using Mix.Cms.Lib.Enums;
using Mix.Cms.Lib.Models.Cms;
using Mix.Domain.Core.ViewModels;
using Mix.Domain.Data.ViewModels;
using Newtonsoft.Json;

namespace Mix.Cms.Lib.ViewModels.MixAttributeSets
{
    public class DeleteViewModel
      : ViewModelBase<MixCmsContext, MixDatabase, DeleteViewModel>
    {
        #region Properties

        #region Models

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("ReferenceId")]
        public int? ReferenceId { get; set; }

        #endregion Models

        #endregion Properties

        #region Contructors

        public DeleteViewModel() : base()
        {
        }

        public DeleteViewModel(MixDatabase model, MixCmsContext _context = null, IDbContextTransaction _transaction = null) : base(model, _context, _transaction)
        {
        }

        #endregion Contructors

        #region Overrides

        public override RepositoryResponse<bool> RemoveRelatedModels(DeleteViewModel view, MixCmsContext _context = null, IDbContextTransaction _transaction = null)
        {
            var result = new RepositoryResponse<bool>() { IsSucceed = true };
            var removeData = MixAttributeSetDatas.DeleteViewModel.Repository.RemoveListModel(false, f => f.MixDatabaseId == Id, _context, _transaction);
            ViewModelHelper.HandleResult(removeData, ref result);
            if (result.IsSucceed)
            {
                var removeFields = MixAttributeFields.DeleteViewModel.Repository.RemoveListModel(false, f => f.MixDatabaseId == Id, _context, _transaction);
                ViewModelHelper.HandleResult(removeFields, ref result);
            }
            return result;
        }

        public override async System.Threading.Tasks.Task<RepositoryResponse<bool>> RemoveRelatedModelsAsync(DeleteViewModel view, MixCmsContext _context = null, IDbContextTransaction _transaction = null)
        {
            var result = new RepositoryResponse<bool>() { IsSucceed = true };
            var removeData = await MixAttributeSetDatas.DeleteViewModel.Repository.RemoveListModelAsync(false, f => f.MixDatabaseId == Id, _context, _transaction);
            ViewModelHelper.HandleResult(removeData, ref result);
            if (result.IsSucceed)
            {
                var removeFields = await MixAttributeFields.DeleteViewModel.Repository.RemoveListModelAsync(
                    false, f => f.MixDatabaseId == Id || f.ReferenceId == Id, _context, _transaction);
                ViewModelHelper.HandleResult(removeFields, ref result);
            }
            if (result.IsSucceed)
            {
                var removeRelated = await MixRelatedAttributeSets.DeleteViewModel.Repository.RemoveListModelAsync(false,
                    f => f.Id == Id || (f.AttributeSetId == Id && f.ParentType == MixDatabaseType.Service)
                    , _context, _transaction);
                ViewModelHelper.HandleResult(removeRelated, ref result);
            }

            return result;
        }

        #endregion Overrides
    }
}