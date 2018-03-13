/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

class StudentExpense {
    studentID: KnockoutObservable<number>;
    expenseID: KnockoutObservable<number>;

    constructor(studentID: number, expenseID: number) {
        this.studentID = ko.observable(studentID);
        this.expenseID = ko.observable(expenseID);
    }
}