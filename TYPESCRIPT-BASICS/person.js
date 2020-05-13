"use strict";
exports.__esModule = true;
var PersonExport = /** @class */ (function () {
    function PersonExport(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonExport.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return PersonExport;
}());
exports.PersonExport = PersonExport;
