/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

class StudentIncome {
    studentID: KnockoutObservable<number>;
    incomeID: KnockoutObservable<number>;

    constructor(studentID: number, incomeID: number) {
        this.studentID = ko.observable(studentID);
        this.incomeID = ko.observable(incomeID);
    }
}