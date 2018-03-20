using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Data.SqlClient;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace PlannerService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : IPlannerService
    {
        SqlConnection myConnection = new SqlConnection("user id=username;" +
                                       "password=password;server=serverurl;" +
                                       "Trusted_Connection=yes;" +
                                       "Data Source=localhost:44037; " +
                                       "connection timeout=30;" +
                                        "Database=PlannerService;");

        private static List<Income> _income = new List<Income>();
        private static List<Expenditure> _expense = new List<Expenditure>();
        private static List<IncomeType> _incomeType = new List<IncomeType>();
        

        public void AddIncome(string inName, int intypeID, decimal amountWk, decimal amountMth, decimal amountQt, decimal amountTm, decimal amountYr)
        {          

            Income income = new Income(inName, intypeID, amountWk, amountMth, amountQt, amountTm, amountYr);
            _income.Add(income);
            
        }

        public void AddExpense(string exName, int extypeID, decimal amountWk, decimal amountMth, decimal amountQt, decimal amountTm, decimal amountYr, bool isCommunal)
        {
            Expenditure _expense = new Expenditure(exName, extypeID, amountWk, amountMth, amountQt, amountTm, amountYr, isCommunal);
        }

        [return: MessageParameter(Name = "ExpenseMonth")]
        public decimal ReadExpenseMonth()
        {
            if (_expense.Count == 0)
                return 0;

            return _expense[_expense.Count - 1].MonthlyAmount;
        }

        [return: MessageParameter(Name = "ExpenseQuart")]
        public decimal ReadExpenseQuart()
        {
            if (_expense.Count == 0)
                return 0;

            return _expense[_expense.Count - 1].QuarterlyAmount;
        }

        [return: MessageParameter(Name = "ExpenseTerm")]
        public decimal ReadExpenseTerm()
        {
            if (_expense.Count == 0)
                return 0;

            return _expense[_expense.Count - 1].TermlyAmount;
        }

        [return: MessageParameter(Name = "ExpenseWeek")]
        public decimal ReadExpenseWeek()
        {
            if (_expense.Count == 0)
                return 0;

            return _expense[_expense.Count - 1].WeeklyAmount;
        }

        [return: MessageParameter(Name = "ExpenseYear")]
        public decimal ReadExpenseYear()
        {
            if (_expense.Count == 0)
                return 0;

            return _expense[_expense.Count - 1].YearlyAmount;
        }

        [return: MessageParameter(Name = "IncomeMonth")]
        public decimal ReadIncomeMonth()
        {
            if (_income.Count == 0)
                return 0;

            return _income[_income.Count - 1].MonthlyAmount;
        }

        [return: MessageParameter(Name = "IncomeQuart")]
        public decimal ReadIncomeQuart()
        {
            if (_income.Count == 0)
                return 0;

            return _income[_income.Count - 1].QuarterlyAmount;
        }

        [return: MessageParameter(Name = "IncomeTerm")]
        public decimal ReadIncomeTerm()
        {
            if (_income.Count == 0)
                return 0;

            return _income[_income.Count - 1].TermlyAmount;
        }

        [return: MessageParameter(Name = "IncomeWeek")]
        public decimal ReadIncomeWeek()
        {
            if (_income.Count == 0)
                return 0;

            return _income[_income.Count - 1].WeeklyAmount;
        }

        [return: MessageParameter(Name = "IncomeYear")]
        public decimal ReadIncomeYear()
        {
            if (_income.Count == 0)
                return 0;

            return _income[_income.Count - 1].YearlyAmount;
        }


        [return: MessageParameter(Name = "IncomeType")]
        public int ReadIncomeType()
        {

            return 0;
        }

        // Income amount methods
        public Income ModifyAmount(int amtId, Income amountChanges)
        {
            try
            {
                Income amt = _income[amtId];

                amt.IncomeName = amountChanges.IncomeName;
                amt.IncomeType = amountChanges.IncomeType;
                amt.WeeklyAmount = amountChanges.WeeklyAmount;
                amt.MonthlyAmount = amountChanges.MonthlyAmount;
                amt.QuarterlyAmount = amountChanges.QuarterlyAmount;
                amt.TermlyAmount = amountChanges.TermlyAmount;
                amt.YearlyAmount = amountChanges.YearlyAmount;

                return amt;
            }
            catch // (ArgumentOutOfRangeException e)
            {
                return new Income("Broken", 0, 0, 0, 0, 0, 0);
            }
        }

        public List<IncomeType> ReadAllTypes(int tID, string typeName)
        {
            List<IncomeType> typelist = new List<IncomeType>();
            IncomeType type = new IncomeType();
            string typeID = "";
 
            SQLOpen();

            try
            {
                SqlDataReader myReader = null;
                SqlCommand myCommand = new SqlCommand("select * from IncomeType",
                                                         myConnection);
                myReader = myCommand.ExecuteReader();
                while (myReader.Read())
                {
                    typeID = (myReader["InTypeID"].ToString());

                    if (Int32.TryParse(typeID, out tID))
                    {
                        type.InTypeID = tID;
                    }

                    type.InTypeName = (myReader["InTypeName"].ToString());
                    typelist.Add(type);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            SQLClose();
            return typelist;
        }

        public void DeleteIncome(int amtId)
        {
            try
            {
                _income.RemoveAt(amtId);
            }
            catch // (ArgumentOutOfRangeException e)
            {
            }
        }


        public void SQLOpen()
        {
            try
            {
                myConnection.Open();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }

        }

        public void SQLClose()
        {
            try
            {
                myConnection.Close();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

    }

}
