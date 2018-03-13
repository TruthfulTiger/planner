/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="budget.ts" />

class Expenditure extends Budget {

    communal: KnockoutObservable<boolean>;

    constructor(id: number, name: string, typeID: number, weeklyAmt: number, monthlyAmt: number, quartAmt: number, termlyAmt: number, yearlyAmt: number, communal: boolean) {
        super(id, name, typeID, weeklyAmt, monthlyAmt, quartAmt, termlyAmt, yearlyAmt);
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.typeID = ko.observable(typeID);
        this.weeklyAmt = ko.observable(weeklyAmt);
        this.monthlyAmt = ko.observable(monthlyAmt);
        this.quartAmt = ko.observable(quartAmt);
        this.termlyAmt = ko.observable(termlyAmt);
        this.yearlyAmt = ko.observable(yearlyAmt);
        this.communal = ko.observable(communal);
    }
}