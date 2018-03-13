/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

class Student {
    id: KnockoutObservable<string>;
    email: KnockoutObservable<string>;
    username: KnockoutObservable<string>;
    password: KnockoutObservable<string>;
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    address1: KnockoutObservable<string>;
    address2: KnockoutObservable<string>;
    city: KnockoutObservable<string>;
    postcode: KnockoutObservable<string>;
    country: KnockoutObservable<string>;
    studyPlace: KnockoutObservable<string>;
    householdID: KnockoutObservable<number>;

    constructor(id: string, email: string, username: string, password: string, firstName: string, lastName: string, address1: string, address2: string, city: string, postcode: string, country: string, studyPlace: string, householdID: number) {
        this.id = ko.observable(id);
        this.email = ko.observable(email);
        this.username = ko.observable(username);
        this.password = ko.observable(password);
        this.firstName = ko.observable(firstName);
        this.lastName = ko.observable(lastName);
        this.address1 = ko.observable(address1);
        this.address2 = ko.observable(address2);
        this.city = ko.observable(city);
        this.postcode = ko.observable(postcode);
        this.country = ko.observable(country);
        this.studyPlace = ko.observable(studyPlace);
        this.householdID = ko.observable(householdID);
    }
}