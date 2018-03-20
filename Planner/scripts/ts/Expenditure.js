/// <reference path="../typings/jquery/jquery.d.ts" />
var Expenditure = (function () {
    function Expenditure(inID, inName, inTypeID, wk, mth, qt, tm, yr, communal) {
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
    Expenditure.prototype.getID = function () {
        return this.id;
    };
    Expenditure.prototype.getName = function () {
        return this.name;
    };
    Expenditure.prototype.setName = function (value) {
        return this.name = value;
    };
    Expenditure.prototype.getTypeID = function () {
        return this.typeID;
    };
    Expenditure.prototype.setTypeID = function (value) {
        return this.typeID = value;
    };
    Expenditure.prototype.getWklyAmt = function () {
        return this.weeklyAmt;
    };
    Expenditure.prototype.setWklyAmt = function (value) {
        return this.weeklyAmt = value;
    };
    Expenditure.prototype.getMthlyAmt = function () {
        return this.monthlyAmt;
    };
    Expenditure.prototype.setMthlyAmt = function (value) {
        return this.monthlyAmt = value;
    };
    Expenditure.prototype.getQtlyAmt = function () {
        return this.quartAmt;
    };
    Expenditure.prototype.setQtlyAmt = function (value) {
        return this.quartAmt = value;
    };
    Expenditure.prototype.getTmlyAmt = function () {
        return this.termlyAmt;
    };
    Expenditure.prototype.setTmlyAmt = function (value) {
        return this.termlyAmt = value;
    };
    Expenditure.prototype.getYrlyAmt = function () {
        return this.yearlyAmt;
    };
    Expenditure.prototype.setYrlyAmt = function (value) {
        return this.yearlyAmt = value;
    };
    Expenditure.prototype.getCommunal = function () {
        return this.communal;
    };
    Expenditure.prototype.setCommunal = function (value) {
        return this.communal = value;
    };
    return Expenditure;
}());
//# sourceMappingURL=Expenditure.js.map