$PathToPackagesDirectory = @('D:\`[Workspace`]\`[Environments`]\`[Marketing`]\`[D`]\Terrasoft.WebApp\Terrasoft.Configuration\Pkg')
$PackageDirectory = @('D:\`[Workspace`]\`[Environments`]\`[Marketing`]\`[D`]\Terrasoft.WebApp\Terrasoft.Configuration\Pkg\MaibBase')
$GzDirectory = @('D:\[Workspace]\[Packages]\[Marketing]\PreProd\[Installed]\MaibBase.gz')
$PackageName = @('MaibBase')
$InstallDirectory = @('D:\`[Workspace`]\`[Packages`]\`[Marketing`]\PreProd\`[Installed`]')


cd 'D:\`[Workspace`]\`[Environments`]\`[Marketing`]\`[D`]\Terrasoft.WebApp\Terrasoft.Configuration\Pkg\MaibBase'
echo "------------------------------ Build start -----------------------------"
dotnet build MaibBase.sln
echo "------------------------------ Build completed -----------------------------"

cd 'D:\`[Workspace`]\`[Environments`]\`[Marketing`]\`[D`]\Terrasoft.WebApp\Terrasoft.Configuration\Pkg'
echo "------------------------------ Compression start -----------------------------"
clio compress MaibBase -d 'D:\[Workspace]\[Packages]\[Marketing]\PreProd\[Installed]\MaibBase.gz'

cd 'D:\`[Workspace`]\`[Packages`]\`[Marketing`]\PreProd\`[Installed`]'
echo "------------------------------ Start packing in .zip -----------------------------"
Compress-Archive -Path MaibBase.gz -DestinationPath MaibBase_v1.0.2.zip
echo "------------------------------ Packing in .zip is completed -----------------------------"

echo "------------------------------ Connecting to the application ------------------------------"
clio ping -u http://deploy.marketing.creatio.local -l Supervisor -p Supervisor

echo "------------------------------ Package installing ------------------------------"
clio install MaibBase_v1.0.2.zip

echo "------------------------------ Redis cleaning ------------------------------"
clio flushdb -u http://deploy.marketing.creatio.local -l Supervisor -p Supervisor

echo "------------------------------ Application restarting ------------------------------"
clio restart -u http://deploy.marketing.creatio.local -l Supervisor -p Supervisor
