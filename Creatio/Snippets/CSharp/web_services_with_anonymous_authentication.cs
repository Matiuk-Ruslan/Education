using System;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Core;
using Terrasoft.Web.Common;
using Terrasoft.Web.Http.Abstractions;

namespace CreatioPackage.Files.cs
{
    #region Classes

    /// <summary> Веб-сервис: WebServiceWithAnonymousAuthentication </summary>
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class WebServiceWithAnonymousAuthentication : BaseService
    {
        #region Fields

        /// <summary> Подключение на уровне приложения </summary>
        private readonly AppConnection _appConnection;

        /// <summary> Системное или пользовательское подключение, используемое при выполнении запроса </summary>
        private readonly UserConnection _userConnection;

        #endregion

        #region Constructors

        /// <summary> Конструктор с получением прав доступа системного подключения </summary>
        public WebServiceWithAnonymousAuthentication()
        {
            _appConnection = HttpContext.Current.Application["AppConnection"] as AppConnection;
            _userConnection = _appConnection.SystemUserConnection;
        }

        /// <summary> Конструктор с получением прав доступа пользовательского подключения </summary>
        public WebServiceWithAnonymousAuthentication(UserConnection userConnection) {  _userConnection= userConnection; }

        #endregion

        #region Methods

        /// <summary> Конечная точка: {{siteAddress}}/0/ServiceModel/WebServiceWithAnonymousAuthentication/CreateData </summary>
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare, ResponseFormat = WebMessageFormat.Json)]
        public string CreateData(string incomingData)
        {
            try { return _userConnection.CurrentUser.Contact.Name; }
            catch (Exception ex) { return ex.Message; }
        }

        #endregion
    }

    #endregion
}