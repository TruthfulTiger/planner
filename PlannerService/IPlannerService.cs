using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace PlannerService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface IPlannerService
    {
        // Income amounts
        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
               RequestFormat = WebMessageFormat.Json,
               ResponseFormat = WebMessageFormat.Json,
               UriTemplate = "/incomeweek")]
        [return: MessageParameter(Name = "IncomeWeek")]            

        decimal ReadIncomeWeek();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/incomemonth")]
        [return: MessageParameter(Name = "IncomeMonth")]            

        decimal ReadIncomeMonth();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/incomequart")]
        [return: MessageParameter(Name = "IncomeQuart")]            

        decimal ReadIncomeQuart();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/incometerm")]
        [return: MessageParameter(Name = "IncomeTerm")]            


        decimal ReadIncomeTerm();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/incomeyear")]
        [return: MessageParameter(Name = "IncomeYear")]


        decimal ReadIncomeYear();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
        RequestFormat = WebMessageFormat.Json,
        ResponseFormat = WebMessageFormat.Json,
        UriTemplate = "/incometype")]
        [return: MessageParameter(Name = "IncomeType")]

        int ReadIncomeType();       // READ

        // Expense amounts
        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/expenseweek")]
        [return: MessageParameter(Name = "ExpenseWeek")]          


        decimal ReadExpenseWeek();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/expensemonth")]
        [return: MessageParameter(Name = "ExpenseMonth")]          

        decimal ReadExpenseMonth();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/expensequart")]
        [return: MessageParameter(Name = "ExpenseQuart")]         


        decimal ReadExpenseQuart();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/expenseterm")]
        [return: MessageParameter(Name = "ExpenseTerm")]         


        decimal ReadExpenseTerm();       // READ

        [OperationContract]
        // Use WebGet for GET methods.
        [WebGet(BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
       UriTemplate = "/expenseyear")]
        [return: MessageParameter(Name = "ExpenseYear")]         


        decimal ReadExpenseYear();       // READ

        [WebInvoke(Method = "POST",                         

       BodyStyle = WebMessageBodyStyle.Wrapped,     

       RequestFormat = WebMessageFormat.Json,       

       ResponseFormat = WebMessageFormat.Json,      

       UriTemplate = "/addIncome")]               

       void AddIncome(string inName, int intypeID, decimal amountWk, decimal amountMth, decimal amountQt, decimal amountTm, decimal amountYr);  // CREATE

        [WebInvoke(Method = "POST",

        BodyStyle = WebMessageBodyStyle.Wrapped,

        RequestFormat = WebMessageFormat.Json,

        ResponseFormat = WebMessageFormat.Json,

        UriTemplate = "/addExpense")]

        void AddExpense(string exName, int extypeID, decimal amountWk, decimal amountMth, decimal amountQt, decimal amountTm, decimal amountYr, bool isCommunal);  // CREATE

        [OperationContract]
        [WebInvoke(Method = "PUT",
       BodyStyle = WebMessageBodyStyle.Wrapped,
       RequestFormat = WebMessageFormat.Json,
       ResponseFormat = WebMessageFormat.Json,
        UriTemplate = "/putmessage?id={msgId}")]   // Read userId from URL, PUT is expected to have a
        // request body containing data (last argument is read
        // from body).
        [return: MessageParameter(Name = "Modifications")]
        Income ModifyAmount(int amtId, Income amountChanges);   // UPDATE

        // Delete income
        [OperationContract]
        [WebInvoke(Method = "DELETE",
           BodyStyle = WebMessageBodyStyle.Wrapped,
           RequestFormat = WebMessageFormat.Json,
           ResponseFormat = WebMessageFormat.Json,
           UriTemplate = "/deleteincome?id={amtId}")]     // Read userId from URL (No request body)
        void DeleteIncome(int amtId);     // DELETE


    }

}
