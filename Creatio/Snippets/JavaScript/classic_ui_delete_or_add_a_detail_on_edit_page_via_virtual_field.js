define("ActivityPageV2", [], function () {
    return {
        entitySchemaName: "Activity",
        attributes: {
            /* Определение виртуальной поля */
            "DetailDisplay": {
                "type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
                "dataValueType": Terrasoft.DataValueType.BOOLEAN,
                "value": false
            }
        },
        modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
        details: /**SCHEMA_DETAILS*/{
            /* Привязка детали к странице редактирования */
            "ExxSchemaDetailInSection": {
                "schemaName": "ExxSchemaDetailInSection",
                "entitySchemaName": "ExxEntityForDetailInSection",
                "filter": {
                    "detailColumn": "ExxActivity",
                    "masterColumn": "Id"
                }
            }
        }/**SCHEMA_DETAILS*/,
        businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
        methods:
        {
            /**
            * Переопределенный базовый виртуальный метод.
            * Срабатывает после окончания инициализации схемы объекта.
            */
            onEntityInitialized: function () {
                /* Вызывается родительская реализация метода */
                this.callParent(arguments);

                /* Чтение Id по [JS объект / справочное поле] ActivityCategory */
                var activityCategoryId = this.get("ActivityCategory").value;
                if (activityCategoryId == "f51c4643-58e6-df11-971b-001d60e938c6") {
                    /* При значении true делает деталь видимой */
                    this.set("DetailDisplay", true);
                }
                else {
                    /* При значении false делает деталь невидимой */
                    this.set("DetailDisplay", false);
                }
            },
        },
        dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
        diff: /**SCHEMA_DIFF*/[
            /* Элемент детали на странице */
            {
                "operation": "insert",
                "name": "ExxSchemaDetailInSection",
                "values": {
                    "itemType": 2,
                    "markerValue": "added-detail",
                    "visible": {
                        "bindTo": "DetailDisplay"
                    }
                },
                "parentName": "GeneralInfoTab",
                "propertyName": "items",
                "index": 3
            }
        ]/**SCHEMA_DIFF*/
    };
});