/// <reference path="../typings/jquery/jquery.d.ts" />

export class IncomeType {
    id: number;
    name: string;

    constructor(jsonData: any) {
        $.extend(this, jsonData);
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        return this.name = value;
    }
}