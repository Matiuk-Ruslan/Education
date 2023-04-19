# Clio

## Clio package

* Разворачиваем приложение на локальной машине
* В `bash` терминале, в папке `Pkg` создаем `clio` пакет: `clio init PackageName`
* В `bash` терминале, в папке `Pkg` изменяем версию пакета: `clio set-pkg-version PackageName -v 1.0.0`
* В приложении, обновляем данные из файловой системы, обновляем конфигурацию, полностью компилируем
* В приложении, изменяем значение системной настройки `Издатель`
* В приложении, изменяем значение системной настройки `Текущий пакет`
* В `bash` терминале, чистим Redis: `clio flushdb`
* В `bash` терминале, перезапускаем приложение: `clio restart`

## Workspace package

* Разворачиваем приложение на локальной машине 
* В приложении, создаем рабочее пространство и пакет
  * Дизайнер системы
    * Центр приложений
      * Новое приложение
        * Приложение с нуля
* В `bash` терминале, создаем пространство для разработки: `clio create-workspace`
* В файле: `{{FolderAddressWorkspace}}\.clio\workspaceSettings.json`
  * Устанавливаем версию приложения, свойство `ApplicationVersion`
  * Устанавливаем название пакета, свойство `Packages`
* В `bash` терминале, открываем конфигурацию `clio`: `clio cfg open`
  * Устанавливаем настройки для требуемой среды на `IIS`

    ``` JSON
    {
      "ActiveEnvironmentKey": "Sandbox",  // КЛЮЧ_ОПРЕДЕЛЯЕТ_КАКАЯ_СРЕДА_АКТИВНА
      "Autoupdate": false,
      "Environments": {
        "Sandbox": {                      // НАЗВАНИЕ_СРЕДЫ
          "Uri": "http://localhost:1001",   // АДРЕС_ПРИЛОЖЕНИЯ_НА_ISS
          "Login": "Supervisor",            // ЛОГИН
          "Password": "Supervisor",         // ПАРОЛЬ
          "IsNetCore": false
        }
      }
    }
    ```
* В `bash` терминале, подключаемся к приложению: `clio ping`
* В `bash` терминале, установим `clio` в приложение: `clio install-gate`
* В `bash` терминале, восстанавливаем `NuGet` для пространства: `clio restore-workspace`
* В `bash` терминале, загружаем все нужные `.dll`: `clio dconf -e EnvironmentName`
* В приложении, обновляем конфигурацию, полностью компилируем
* В `bash` терминале, чистим Redis: `clio flushdb`
* В `bash` терминале, перезапускаем приложение: `clio restart`
* В `bash` терминале, в папке `{{FolderAddressWorkspace}}\packages` изменяем версию пакета: `clio set-pkg-version PackageName -v 1.0.0`
* В `bash` терминале, загружаем пакет на целевую среду: `clio install PackageName`
* В приложении, изменяем значение системной настройки `Издатель`
* В приложении, изменяем значение системной настройки `Текущий пакет`

## Additional commands

* Билд для проекта `dotnet build MaibBase.sln`
* Подготовка пакета: `clio compress MaibBase`
* Изменить версию пакета: `clio set-pkg-version PackageName -v 1.0.0`

## **Useful links**

* [Documentation for `Clio`](https://github.com/Advance-Technologies-Foundation/clio)
