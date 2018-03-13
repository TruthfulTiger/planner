/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="budget.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Income = (function (_super) {
    __extends(Income, _super);
    function Income(id, name, typeID, weeklyAmt, monthlyAmt, quartAmt, termlyAmt, yearlyAmt) {
        _super.call(this, id, name, typeID, weeklyAmt, monthlyAmt, quartAmt, termlyAmt, yearlyAmt);
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.typeID = ko.observable(typeID);
        this.weeklyAmt = ko.observable(weeklyAmt);
        this.monthlyAmt = ko.observable(monthlyAmt);
        this.quartAmt = ko.observable(quartAmt);
        this.termlyAmt = ko.observable(termlyAmt);
        this.yearlyAmt = ko.observable(yearlyAmt);
    }
    return Income;
}(Budget));
//# sourceMappingURL=Income.js.map