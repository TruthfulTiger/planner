/// <reference path="../typings/jquery/jquery.d.ts" />
export class IncomeType {
    constructor(jsonData) {
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
//# sourceMappingURL=IncomeType.js.map