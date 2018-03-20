class Income {
    constructor(inID, inName, inTypeID, wk, mth, qt, tm, yr) {
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
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        return this.name = value;
    }
    getTypeID() {
        return this.typeID;
    }
    setTypeID(value) {
        return this.typeID = value;
    }
    getWklyAmt() {
        return this.weeklyAmt;
    }
    setWklyAmt(value) {
        return this.weeklyAmt = value;
    }
    getMthlyAmt() {
        return this.monthlyAmt;
    }
    setMthlyAmt(value) {
        return this.monthlyAmt = value;
    }
    getQtlyAmt() {
        return this.quartAmt;
    }
    setQtlyAmt(value) {
        return this.quartAmt = value;
    }
    getTmlyAmt() {
        return this.termlyAmt;
    }
    setTmlyAmt(value) {
        return this.termlyAmt = value;
    }
    getYrlyAmt() {
        return this.yearlyAmt;
    }
    setYrlyAmt(value) {
        return this.yearlyAmt = value;
    }
}
//# sourceMappingURL=Income.js.map