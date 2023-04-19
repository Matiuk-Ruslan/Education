---------------------------------------------------------------------
------------------------------ PACKAGE ------------------------------
---------------------------------------------------------------------

------------------ Unlocking a third party package ------------------

DECLARE
            @PackageName  nvarchar(500),     
            @UIdPackage   uniqueidentifier,
            @IsChanged    bit,               
            @IsLocked     bit,               
            @InstallType  int                
            -- Maintainer = 'Customer' 
        SET @PackageName = 'EVA'                                    /*  [Пакет]  */
        SET @UIdPackage  = 'a97f04ff-026b-4330-93ee-4eb7a1b6247c'   /*  [Идентификатор пакета]  */
        SET @IsChanged   = 0                                        /*  0 - пакет разблокирован, 1 - пакет заблокирован (0 - по умолчанию)  */
        SET @IsLocked    = 0                                        /*  0 - пакет разблокирован, 1 - пакет заблокирован (0 - по умолчанию)  */
        SET @InstallType = 1                                        /*  0 - пакет разблокирован, 1 - пакет заблокирован (1 - по умолчанию)  */

-- Чтение
SELECT [Id], [Name], [isChanged], [isLocked], [InstallType], [Maintainer]
FROM [SysPackage] 
WHERE [Name] = @PackageName
  AND [Id]  = @UIdPackage

SELECT [Id], [Name], [Caption], [isChanged], [isLocked], [SysPackageId], [ManagerName]
FROM [SysSchema] 
WHERE [SysPackageId] = (SELECT [Id] 
                        FROM [SysPackage] 
                        WHERE [Name] = @PackageName
                          AND [SysPackageId]  = @UIdPackage)
-- Изменение
UPDATE [SysPackage] 
SET [IsChanged]   = @IsChanged, 
    [IsLocked]    = @IsLocked, 
    [InstallType] = @InstallType
WHERE [Name] = @PackageName
  AND [Id]  = @UIdPackage

UPDATE [SysSchema]
SET [IsChanged] = @IsChanged, 
    [IsLocked]  = @IsLocked
WHERE [SysPackageId] = (SELECT [Id] 
                      FROM [SysPackage] 
                      WHERE [Name] = @PackageName
                        AND [SysPackageId]  = @UIdPackage)
-- Чтение
SELECT [Id], [Name], [isChanged], [isLocked], [InstallType], [Maintainer]
FROM [SysPackage] 
WHERE [Name] = @PackageName
  AND [Id]  = @UIdPackage

SELECT [Id], [Name], [Caption], [isChanged], [isLocked], [SysPackageId], [ManagerName]
FROM [SysSchema] 
WHERE [SysPackageId] = (SELECT [Id] 
                      FROM [SysPackage] 
                      WHERE [Name] = @PackageName 
                        AND [UId]  = @UIdPackage)
