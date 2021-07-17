﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace Mix.Cms.Lib.Migrations
{
    public partial class AddEditorValue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EditorType",
                table: "mix_post",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "Html",
                collation: "Vietnamese_CI_AS");

            migrationBuilder.AddColumn<string>(
                name: "EditorValue",
                table: "mix_post",
                type: "text",
                nullable: true,
                collation: "Vietnamese_CI_AS");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "mix_portal_page_role",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<string>(
                name: "EditorType",
                table: "mix_page",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "Html",
                collation: "Vietnamese_CI_AS");

            migrationBuilder.AddColumn<string>(
                name: "EditorValue",
                table: "mix_page",
                type: "text",
                nullable: true,
                collation: "Vietnamese_CI_AS");

            migrationBuilder.AddColumn<string>(
                name: "EditorType",
                table: "mix_module",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "Html",
                collation: "Vietnamese_CI_AS");

            migrationBuilder.AddColumn<string>(
                name: "EditorValue",
                table: "mix_module",
                type: "text",
                nullable: true,
                collation: "Vietnamese_CI_AS");

            migrationBuilder.AddColumn<string>(
                name: "EditorType",
                table: "mix_database_data_value",
                type: "varchar(50)",
                nullable: false,
                defaultValue: "Html",
                collation: "Vietnamese_CI_AS");

            migrationBuilder.AddColumn<string>(
                name: "EditorValue",
                table: "mix_database_data_value",
                type: "text",
                nullable: true,
                collation: "Vietnamese_CI_AS");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EditorType",
                table: "mix_post");

            migrationBuilder.DropColumn(
                name: "EditorValue",
                table: "mix_post");

            migrationBuilder.DropColumn(
                name: "EditorType",
                table: "mix_page");

            migrationBuilder.DropColumn(
                name: "EditorValue",
                table: "mix_page");

            migrationBuilder.DropColumn(
                name: "EditorType",
                table: "mix_module");

            migrationBuilder.DropColumn(
                name: "EditorValue",
                table: "mix_module");

            migrationBuilder.DropColumn(
                name: "EditorType",
                table: "mix_database_data_value");

            migrationBuilder.DropColumn(
                name: "EditorValue",
                table: "mix_database_data_value");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "mix_portal_page_role",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");
        }
    }
}
