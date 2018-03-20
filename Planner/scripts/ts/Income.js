var Income = (function () {
    function Income(inID, inName, inTypeID, wk, mth, qt, tm, yr) {
        this.id = inID;
        this.name = inName;
        this.typeID = inTypeID;
        this.weeklyAmt = wk;
        this.monthlyAmt = mth;
        this.termlyAmt = tm;
        this.quartAmt = qt;
        this.yearlyAmt = yr;
    }
    // Properties
    Income.prototype.getID = function () {
        return this.id;
    };
    Income.prototype.getName = function () {
        return this.name;
    };
    Income.prototype.setName = function (value) {
        return this.name = value;
    };
    Income.prototype.getTypeID = function () {
        return this.typeID;
    };
    Income.prototype.setTypeID = function (value) {
        return this.typeID = value;
    };
    Income.prototype.getWklyAmt = function () {
        return this.weeklyAmt;
    };
    Income.prototype.setWklyAmt = function (value) {
        return this.weeklyAmt = value;
    };
    Income.prototype.getMthlyAmt = function () {
        return this.monthlyAmt;
    };
    Income.prototype.setMthlyAmt = function (value) {
        return this.monthlyAmt = value;
    };
    Income.prototype.getQtlyAmt = function () {
        return this.quartAmt;
    };
    Income.prototype.setQtlyAmt = function (value) {
        return this.quartAmt = value;
    };
    Income.prototype.getTmlyAmt = function () {
        return this.termlyAmt;
    };
    Income.prototype.setTmlyAmt = function (value) {
        return this.termlyAmt = value;
    };
    Income.prototype.getYrlyAmt = function () {
        return this.yearlyAmt;
    };
    Income.prototype.setYrlyAmt = function (value) {
        return this.yearlyAmt = value;
    };
    return Income;
}());
//# sourceMappingURL=Income.js.map