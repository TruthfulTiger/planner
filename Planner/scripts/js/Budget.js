/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var Budget = (function () {
    function Budget(id, name, typeID, weeklyAmt, monthlyAmt, quartAmt, termlyAmt, yearlyAmt) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.typeID = ko.observable(typeID);
        this.weeklyAmt = ko.observable(weeklyAmt);
        this.monthlyAmt = ko.observable(monthlyAmt);
        this.quartAmt = ko.observable(quartAmt);
        this.termlyAmt = ko.observable(termlyAmt);
        this.yearlyAmt = ko.observable(yearlyAmt);
    }
    return Budget;
}());
//# sourceMappingURL=Budget.js.map