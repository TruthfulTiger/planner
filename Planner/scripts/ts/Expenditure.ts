/// <reference path="../typings/jquery/jquery.d.ts" />

class Expenditure {

    private id: number;
    private name: string;
    private typeID: number;
    private weeklyAmt: number;
    private monthlyAmt: number;
    private quartAmt: number;
    private termlyAmt: number;
    private yearlyAmt: number;
    private communal: boolean;

    constructor(inID?: number, inName?: string, inTypeID?: number, wk?: number, mth?: number, qt?: number, tm?: number, yr?: number, communal?: boolean) {
        this.id = inID;
        this.name = inName;
        this.typeID = inTypeID;
        this.weeklyAmt = wk;
        this.monthlyAmt = mth;
        this.termlyAmt = tm;
        this.quartAmt = qt;
        this.yearlyAmt = yr;
        this.communal = communal;
    }

    // Properties
    getID(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(value): string {
        return this.name = value;
    }

    getTypeID(): number {
        return this.typeID;
    }

    setTypeID(value): number {
        return this.typeID = value;
    }

    getWklyAmt(): number {
        return this.weeklyAmt;
    }

    setWklyAmt(value): number {
        return this.weeklyAmt = value;
    }

    getMthlyAmt(): number {
        return this.monthlyAmt;
    }

    setMthlyAmt(value): number {
        return this.monthlyAmt = value;
    }

    getQtlyAmt(): number {
        return this.quartAmt;
    }

    setQtlyAmt(value): number {
        return this.quartAmt = value;
    }

    getTmlyAmt(): number {
        return this.termlyAmt;
    }

    setTmlyAmt(value): number {
        return this.termlyAmt = value;
    }

    getYrlyAmt(): number {
        return this.yearlyAmt;
    }

    setYrlyAmt(value): number {
        return this.yearlyAmt = value;
    }

    getCommunal(): boolean {
        return this.communal;
    }

    setCommunal(value): boolean {
        return this.communal = value;
    }
}