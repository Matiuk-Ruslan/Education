define("ActivityPageV2", [], function () {
	return {
		entitySchemaName: "Activity",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
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
					this.tabsDelete();
				}
				else {
					this.tabsAdd();
				}
			},

			/**
			* Удаление вкладки.
			*/
			tabsDelete: function () {
				/* Чтение коллекции вкладок */
				var tabs = this.get("TabsCollection");
				/* Удаление вкладки по ключу */
				tabs.removeByKey("EmailTab");
			},

			/**
			* Добаление вкладки.
			*/
			tabsAdd: function () {
				/* Чтение коллекции вкладок */
				var tabs = this.get("TabsCollection");
				/* Добаление вкладки по ключу */
				tabs.insert(3, 'EmailTab', tabs.createItem({
					Caption: "Email",
					Name: "EmailTab"
				}));
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
	};
});