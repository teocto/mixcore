#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/core/runtime:2.2
COPY src/Mix.Cms.Web/bin/release/netcoreapp2.2/publish/ app/

ENTRYPOINT ["dotnet", "app/Mix.Cms.Web.dll"]