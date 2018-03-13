/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var StudentIncome = (function () {
    function StudentIncome(studentID, incomeID) {
        this.studentID = ko.observable(studentID);
        this.incomeID = ko.observable(incomeID);
    }
    return StudentIncome;
}());
//# sourceMappingURL=studentincome.js.map