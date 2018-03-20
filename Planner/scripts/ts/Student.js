/// <reference path="../typings/jquery/jquery.d.ts" />
var Student = (function () {
    function Student(id, email, username, password, firstName, lastName, address1, address2, city, postcode, country, studyPlace, householdID) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.postcode = postcode;
        this.country = country;
        this.studyPlace = studyPlace;
        this.householdID = householdID;
    }
    return Student;
}());
//# sourceMappingURL=Student.js.map