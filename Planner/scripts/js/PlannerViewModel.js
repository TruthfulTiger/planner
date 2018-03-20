///// <reference path="../typings/jquery/jquery.d.ts" />
///// <reference path="../typings/knockout/knockout.d.ts" />
///// <reference path="../typings/knockout.mapping/knockout.mapping.d.ts" />
///// <reference path="household.ts" />
///// <reference path="student.ts" />
///// <reference path="incometype.ts" />
///// <reference path="expensetype.ts" />
///// <reference path="income.ts" />
///// <reference path="expenditure.ts" />
///// <reference path="studentexpense.ts" />
///// <reference path="studentincome.ts" />
//class PlannerViewModel {
//    // Attributes
//    private studentMap: KnockoutMappingOptions = {
//        key: d => ko.utils.unwrapObservable(d.id)
//    };
//    student: Student;
//    household: Household;
//    incomeType: IncomeType;
//    expenseType: ExpenseType;
//    income: Income;
//    expense: Expenditure;
//    studentExpense: StudentExpense;
//    studentIncome: StudentIncome;
//    // Constructor
//    constructor(studentID?: string, studentEmail?: string, username?: string, password?: string, firstName?: string, lastName?: string, homeAddress1?: string, homeAddress2?: string, homeCity?: string, homePCode?: string, homeCountry?: string, studyPlace?: string, householdID?: number, householdName?: string, termAddress1?: string, termAddress2?: string, termCity?: string, termPCode?: string, termCountry?: string, incomeTypeID?: number, incomeType?: string, expenseTypeID?: number, expenseType?: string, incomeID?: number, incomeName?: string, incomeWeekly?: number, incomeMonthly?: number, incomeQuart?: number, incomeTermly?: number, incomeYearly?: number, expenseID?: number, expenseName?: string, expenseWeekly?: number, expenseMonthly?: number, expenseQuart?: number, expenseTermly?: number, expenseYearly?: number, isCommunal?: boolean) {
//        // Student properties
//        this.student.id = ko.observable(studentID);
//        this.student.email = ko.observable(studentEmail);
//        this.student.username = ko.observable(username);
//        this.student.password = ko.observable(password);
//        this.student.firstName = ko.observable(firstName);
//        this.student.lastName = ko.observable(lastName);
//        this.student.address1 = ko.observable(homeAddress1);
//        this.student.address2 = ko.observable(homeAddress2);
//        this.student.city = ko.observable(homeCity);
//        this.student.postcode = ko.observable(homePCode);
//        this.student.country = ko.observable(homeCountry);
//        this.student.studyPlace = ko.observable(studyPlace);
//        this.student.householdID = ko.observable(householdID);
//        // Household properties
//        this.household.id = ko.observable(householdID);
//        this.household.name = ko.observable(householdName);
//        this.household.address1 = ko.observable(termAddress1);
//        this.household.address2 = ko.observable(termAddress2);
//        this.household.city = ko.observable(termCity);
//        this.household.postcode = ko.observable(termPCode);
//        this.household.country = ko.observable(termCountry);
//        // Income type properties
//        this.incomeType.id = ko.observable(incomeTypeID);
//        this.incomeType.name = ko.observable(incomeType);
//        // Income properties
//        this.income.id = ko.observable(incomeID);
//        this.income.typeID = ko.observable(incomeTypeID);
//        this.income.name = ko.observable(incomeName);
//        this.income.weeklyAmt = ko.observable(incomeWeekly);
//        this.income.monthlyAmt = ko.observable(incomeMonthly);
//        this.income.quartAmt = ko.observable(incomeQuart);
//        this.income.termlyAmt = ko.observable(incomeTermly);
//        this.income.yearlyAmt = ko.observable(incomeYearly);
//        // Expense type properties
//        this.expenseType.id = ko.observable(expenseTypeID);
//        this.expenseType.name = ko.observable(expenseType);
//        // Expense properties
//        this.expense.id = ko.observable(expenseID);
//        this.expense.typeID = ko.observable(expenseTypeID);
//        this.expense.name = ko.observable(expenseName);
//        this.expense.weeklyAmt = ko.observable(expenseWeekly);
//        this.expense.monthlyAmt = ko.observable(expenseMonthly);
//        this.expense.quartAmt = ko.observable(expenseQuart);
//        this.expense.termlyAmt = ko.observable(expenseTermly);
//        this.expense.yearlyAmt = ko.observable(expenseYearly);
//        this.expense.communal = ko.observable(isCommunal);
//        // Student income 
//        this.studentIncome.incomeID = ko.observable(incomeID);
//        this.studentIncome.studentID = ko.observable(studentID);
//        // Student expense
//        this.studentExpense.expenseID = ko.observable(expenseID);
//        this.studentExpense.studentID = ko.observable(studentID);
//        // Country list
//    }
//    // Properties
//    // Methods
//}
//ko.applyBindings(new PlannerViewModel()); 
//# sourceMappingURL=PlannerViewModel.js.map