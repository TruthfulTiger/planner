/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var StudentExpense = (function () {
    function StudentExpense(studentID, expenseID) {
        this.studentID = ko.observable(studentID);
        this.expenseID = ko.observable(expenseID);
    }
    return StudentExpense;
}());
//# sourceMappingURL=studentexpense.js.map