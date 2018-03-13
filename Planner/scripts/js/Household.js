/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var Household = (function () {
    function Household(id, name, address1, address2, city, postcode, country) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
        this.address1 = ko.observable(address1);
        this.address2 = ko.observable(address2);
        this.city = ko.observable(city);
        this.postcode = ko.observable(postcode);
        this.country = ko.observable(country);
    }
    return Household;
}());
//# sourceMappingURL=Household.js.map