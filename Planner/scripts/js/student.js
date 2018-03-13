/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var Student = (function () {
    function Student(id, email, username, password, firstName, lastName, address1, address2, city, postcode, country, studyPlace, householdID) {
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
    return Student;
}());
//# sourceMappingURL=student.js.map