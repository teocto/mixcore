﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Mix.Cms.Lib.Enums;
using Mix.Cms.Lib.Models.Cms;

namespace Mix.Cms.Lib.Models.EntityConfigurations.POSTGRESQL
{
    public class MixRelatedAttributeSetConfiguration : IEntityTypeConfiguration<MixRelatedAttributeSet>
    {
        public void Configure(EntityTypeBuilder<MixRelatedAttributeSet> entity)
        {
            entity.HasKey(e => new { e.Id, e.Specificulture })
                    .HasName("PK_mix_related_attribute_set");

            entity.ToTable("mix_related_attribute_set");

            entity.Property(e => e.Specificulture)
                .HasColumnType("varchar(10)")
                .HasCharSet("utf8")
                .HasCollation("und-x-icu");

            entity.Property(e => e.CreatedBy)
                .HasColumnType("varchar(50)")
                .HasCharSet("utf8")
                .HasCollation("und-x-icu");

            entity.Property(e => e.CreatedDateTime).HasColumnType("timestamp without time zone");

            entity.Property(e => e.Description)
                .HasColumnType("varchar(450)")
                .HasCharSet("utf8")
                .HasCollation("und-x-icu");

            entity.Property(e => e.Image)
                .HasColumnType("varchar(450)")
                .HasCharSet("utf8")
                .HasCollation("und-x-icu");

            entity.Property(e => e.LastModified).HasColumnType("timestamp without time zone");

            entity.Property(e => e.ModifiedBy)
                .HasColumnType("varchar(50)")
                .HasCharSet("utf8")
                .HasCollation("und-x-icu");

            entity.Property(e => e.ParentType)
                .IsRequired()
                .HasConversion(new EnumToStringConverter<MixDatabaseType>())
                .HasColumnType("varchar(50)")
                .HasCharSet("utf8")
                .HasCollation("und-x-icu");

            entity.Property(e => e.Status)
                .IsRequired()
                .HasConversion(new EnumToStringConverter<MixContentStatus>())
                .HasColumnType("varchar(50)")
                .HasCharSet("utf8")
                .HasCollation("und-x-icu");
        }
    }
}
