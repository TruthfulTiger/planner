/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var IncomeType = (function () {
    function IncomeType(id, name) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
    }
    return IncomeType;
}());
//# sourceMappingURL=IncomeType.js.map