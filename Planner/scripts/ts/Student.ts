/// <reference path="../typings/jquery/jquery.d.ts" />

class Student {
    id: string;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    postcode: string;
    country: string;
    studyPlace: string;
    householdID: number;

    constructor(id: string, email: string, username: string, password: string, firstName: string, lastName: string, address1: string, address2: string, city: string, postcode: string, country: string, studyPlace: string, householdID: number) {
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
}