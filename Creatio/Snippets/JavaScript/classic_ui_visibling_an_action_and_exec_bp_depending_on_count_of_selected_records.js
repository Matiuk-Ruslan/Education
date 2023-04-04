define("ActivitySectionV2", ["ProcessModuleUtilities"], function (ProcessModuleUtilities) {
    return {
        entitySchemaName: "Activity",
        details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
        diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
        methods: {
            /**
            * Переопределенный базовый виртуальный метод.
            * Возвращает коллекцию действий раздела.
            */
            getSectionActions: function () {
                var actionMenuItems = this.callParent(arguments);

                /* Отображение линии разделения */
                actionMenuItems.addItem(this.getButtonMenuItem({
                    Type: "Terrasoft.MenuSeparator",
                    Caption: ""
                }));

                /* Добавление действия */
                actionMenuItems.addItem(this.getButtonMenuItem({
                    "Caption": "Экспорт состояния по заказу",
                    "Enabled": { bindTo: "isButtonMenuItemVisible" },
                    "Click": { bindTo: "runBusinessProcess" },
                    "IsEnabledForSelectedAll": true
                }));

                return actionMenuItems;
            },

            /**
            * Отвечает за видимость действия на странице.
            */
            isButtonMenuItemVisible: function () {
                /* Читаем выбранные записи */
                var selectedRows = this.get("SelectedRows");

                /* Инициализируем признак видимости */
                var isVisible = true;

                /* Если выбрано больше 1-й записи, то isVisible == false */
                if (selectedRows.length > 1) {
                    isVisible = false;
                    return isVisible;
                }

                /* Если выбрана 1-а запись, то проверяем какое у нее состояние */
                if (selectedRows.length == 1) {
                    selectedRows.forEach(function (selectedRowId) {
                        isVisible = this.checkState(selectedRowId);
                    }, this);
                    return isVisible;
                }

                /* Если выбрано 0 записей, то проверяем активную запись */
                if (selectedRows.length == 0) {
                    activeRowId = this.get("ActiveRow");
                    isVisible = this.checkState(activeRowId);
                    return isVisible;
                }
            },

            /**
            * Проверка, выбрана ли запись с нужным состоянием.
            */
            checkState: function (activeRowId) {
                if (activeRowId) {
                    /* Получает коллекцию данных списочного представления реестра раздела */
                    var gridData = this.get("GridData");
                    /* Получает свойства модели — статуса выбранной активности */
                    var selectedActivity = gridData.get(activeRowId);
                    /* Метод возвращает true, если статус активности [Завершена], иначе возвращает false */
                    var selectedActivityStatus = selectedActivity.get("Status");
                    /* Метод возвращает true, если статус активности [Завершена], иначе возвращает false */
                    return selectedActivityStatus.value === "4bdbb88f-58e6-df11-971b-001d60e938c6";
                }
                else {
                    return false;
                }
            },

            /**
            * Запуск бизнес-процесса
            */
            runBusinessProcess: function () {
                var selectedRows = this.get("SelectedRows");

                if (selectedRows.length == 1) {
                    selectedRows.forEach(function (selectedRowId) {
                        var args = {
                            //sysProcessName: "ExxProcess_1",
                            //parameters: { ActivityId: selectedRowId }
                        };
                        ProcessModuleUtilities.executeProcess(args);
                    }, this);
                }

                if (selectedRows.length == 0) {
                    var activeRowId = this.get("ActiveRow");
                    var gridData = this.get("GridData");
                    var activityId = gridData.get(activeRowId).get("Id");

                    var args = {
                        //sysProcessName: "ExxProcess_1",
                        //parameters: { ActivityId: activityId }
                    };
                    ProcessModuleUtilities.executeProcess(args);
                }
            }
        }
    };
});