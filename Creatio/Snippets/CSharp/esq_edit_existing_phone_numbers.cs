
var esq = new EntitySchemaQuery(context.UserConnection.EntitySchemaManager, "Contact");
var primaryColumn = esq.AddColumn("Id").Name;
var mph =  esq.AddColumn("MobilePhone").Name;
var esqOptions = new EntitySchemaQueryOptions()
{
    PageableDirection = PageableSelectDirection.First,
    PageableRowCount = 10000,
    PageableConditionValues = new Dictionary<string, object>()
};
esq.Filters.LogicalOperation = LogicalOperationStrict.Or;
esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.StartWith, mph, "0"));
esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.StartWith, mph, "+"));
EntityCollection contacts = esq.GetEntityCollection(context.UserConnection, esqOptions);
foreach(var item in contacts)
{
	var mobile = item.GetTypedColumnValue<string>("MobilePhone");
	var mobileFirstDigit = mobile[0];
		if(mobileFirstDigit.ToString() == "0")
		{
			
			 var entity = context.UserConnection.EntitySchemaManager.GetInstanceByName("Contact").CreateEntity(context.UserConnection);
			 if(entity.FetchFromDB(item.GetTypedColumnValue<Guid>(primaryColumn)))
             {
				 entity.SetColumnValue("MobilePhone", "38" + item.GetTypedColumnValue<string>("MobilePhone"));
				 entity.Save(false);
             }
		}
		else if(mobileFirstDigit.ToString() == "+")
		{
			
			 var entity = context.UserConnection.EntitySchemaManager.GetInstanceByName("Contact").CreateEntity(context.UserConnection);
			 if(entity.FetchFromDB(item.GetTypedColumnValue<Guid>(primaryColumn)))
             {
             	 var phoneNumber = item.GetTypedColumnValue<string>("MobilePhone").Remove(0,1);
				 entity.SetColumnValue("MobilePhone", phoneNumber );
				 entity.Save(false);
             }
		}
}