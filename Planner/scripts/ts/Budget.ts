/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />


class Budget {
    id: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    typeID: KnockoutObservable<number>;
    weeklyAmt: KnockoutObservable<number>;
    monthlyAmt: KnockoutObservable<number>;
    quartAmt: KnockoutObservable<number>;
    termlyAmt: KnockoutObservable<number>;
    yearlyAmt: KnockoutObservable<number>;

    constructor(id: number, name: string, typeID: number, weeklyAmt: number, monthlyAmt: number, quartAmt: number, termlyAmt: number, yearlyAmt: number) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.typeID = ko.observable(typeID);
        this.weeklyAmt = ko.observable(weeklyAmt);
        this.monthlyAmt = ko.observable(monthlyAmt);
        this.quartAmt = ko.observable(quartAmt);
        this.termlyAmt = ko.observable(termlyAmt);
        this.yearlyAmt = ko.observable(yearlyAmt);
    }
}