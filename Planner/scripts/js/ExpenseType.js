/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/knockout/knockout.d.ts" />
var ExpenseType = (function () {
    function ExpenseType(id, name) {
        this.id = ko.observable(id);
        this.name = ko.observable(name);
    }
    return ExpenseType;
}());
//# sourceMappingURL=ExpenseType.js.map