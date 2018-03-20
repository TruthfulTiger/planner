/// <reference path="../typings/jquery/jquery.d.ts" />
"use strict";
var IncomeType = (function () {
    function IncomeType(jsonData) {
        $.extend(this, jsonData);
    }
    IncomeType.prototype.getID = function () {
        return this.id;
    };
    IncomeType.prototype.getName = function () {
        return this.name;
    };
    IncomeType.prototype.setName = function (value) {
        return this.name = value;
    };
    return IncomeType;
}());
exports.IncomeType = IncomeType;
//# sourceMappingURL=IncomeType.js.map