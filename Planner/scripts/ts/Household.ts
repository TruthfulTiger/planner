/// <reference path="../typings/jquery/jquery.d.ts" />

class Household {
    id: number;
    name: string;
    address1: string;
    address2: string;
    city: string;
    postcode: string;
    country: string;

    constructor(id: number, name: string, address1: string, address2: string, city: string, postcode: string, country: string) {
        this.id = id;
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.postcode = postcode;
        this.country = country;
    }
}

 