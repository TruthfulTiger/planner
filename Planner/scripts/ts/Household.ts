/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />

class Household {
    id: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    address1: KnockoutObservable<string>;
    address2: KnockoutObservable<string>;
    city: KnockoutObservable<string>;
    postcode: KnockoutObservable<string>;
    country: KnockoutObservable<string>;

    constructor(id: number, name: string, address1: string, address2: string, city: string, postcode: string, country: string) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.address1 = ko.observable(address1);
        this.address2 = ko.observable(address2);
        this.city = ko.observable(city);
        this.postcode = ko.observable(postcode);
        this.country = ko.observable(country);
    }
}

 