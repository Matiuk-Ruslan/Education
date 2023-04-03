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
                    "Caption": "Обновить состояние активности",
                    "Enabled": { bindTo: "AreMultipleRowsSelected" },
                    "Click": { bindTo: "updateStatus" },
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
			* Обновление статуса по выбранным строкам в реестре.
			*/
			updateStatus: function () {
                var selectedRows = this.get("SelectedRows");
                if (selectedRows.length > 0) {
					var batchQuery = this.Ext.create("Terrasoft.BatchQuery");
					
                    selectedRows.forEach(function (selectedRowId) {
                        var update = this.Ext.create("Terrasoft.UpdateQuery", { rootSchemaName: "Activity"});
						update.enablePrimaryColumnFilter(selectedRowId);
						var statusId = "4bdbb88f-58e6-df11-971b-001d60e938c6";
						update.setParameterValue("Status", statusId, this.Terrasoft.DataValueType.GUID);
						batchQuery.add(update);
                    }, this);
					
					batchQuery.execute(function() {
                        this.reloadGridData();
                    }, this);
                }
            },
		}
	};
});