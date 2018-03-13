/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

class ExpenseType {
    id: KnockoutObservable<number>;
    name: KnockoutObservable<string>;

    constructor(id: number, name: string) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
    }
}