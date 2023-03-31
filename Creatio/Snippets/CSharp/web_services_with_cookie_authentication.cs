using System;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Web.Common;

namespace CreatioPackage.Files.cs
{
    #region Classes
    
    /// <summary> Веб-сервис: WebServiceWithCookieAuthentication </summary>
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class WebServiceWithCookieAuthentication : BaseService
    {
        #region Methods

        /// <summary> Конечная точка: {{siteAddress}}/0/rest/WebServiceWithCookieAuthentication/CreateData </summary>
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare, ResponseFormat = WebMessageFormat.Json)]
        public string CreateData(string incomingData)
        {
            try { return "Ok"; }
            catch (Exception ex) { return ex.Message; }
        }

        #endregion
    }

    #endregion
}