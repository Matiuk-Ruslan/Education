/* jshint esversion: 6 */
define("ActivityPageV2", [], function () {
    return {
        entitySchemaName: "Activity",
        attributes: {},
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

                /* Чтение Id активности */
                var activityId = this.get("Id");

                // #region ESQ

                /* FROM [ExxEntityForDetailInSection] */
                var readESQ = this.Ext.create("Terrasoft.EntitySchemaQuery", { rootSchemaName: "ExxEntityForDetailInSection" });

                /* SELECT [Id], [ExxName], [ExxActivityId] */
                readESQ.addColumn("Id");
                readESQ.addColumn("ExxName");
                readESQ.addColumn("ExxActivity.Id");

                /* WHERE [ExxActivity] = activityId */
                var esqFirstFilter = readESQ.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "ExxActivity", activityId);
                readESQ.filters.add("esqFirstFilter", esqFirstFilter);

                /* RESULT*/
                readESQ.getEntityCollection(function (result) {
                    if (result.success) {
                        var collection = result.collection;
                        if (collection && collection.getCount() > 0) {
                            var count = collection.getCount();
                            /* Работает в ES6, потому сферху добавлен hint */
                            console.log(`Количество записей в детали: ${count}`);

                            /* Работает как foreach (var item in items) { } */
                            result.collection.each(function (item) {
                                /* Работает в ES6, потому сферху добавлен hint */
                                console.log(`Элемент детали: ${item.values.ExxName}`);
                            });
                        }
                    }
                });

                // #endregion ESQ
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
                    "markerValue": "added-detail"
                },
                "parentName": "GeneralInfoTab",
                "propertyName": "items",
                "index": 3
            }
        ]/**SCHEMA_DIFF*/
    };
});