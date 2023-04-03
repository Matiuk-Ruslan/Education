define("ActivitySectionV2", [], function() {
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
                    "Caption": "Экспорт состояния заказа",
                    "Enabled": { bindTo: "AreMultipleRowsSelected" },
                    "Click": { bindTo: "execBP" },
                    "IsEnabledForSelectedAll": true
                }));
				
                return actionMenuItems;
            },
			
			/**
			* Проверка, выбрано ли несколько строк.
			*/
			AreMultipleRowsSelected: function () {
                var selectedRows = this.get("SelectedRows");
                return selectedRows ? (selectedRows.length > 0) : false;
            },
			
			/**
			* Запуск бизнес-процесса
			*/
			execBP: function () {
                var selectedRows = this.get("SelectedRows");
                if (selectedRows.length > 0) {
                    selectedRows.forEach(function (selectedRowId) {
                        var args = {
                            sysProcessName: "BusinessProcessName",
                            parameters: { ProcessSchemaContactParameter: selectedRowId }
                        };
                        ProcessModuleUtilities.executeProcess(args);
                    }, this);
                }
            }
		}
	};
});