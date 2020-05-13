var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Foo;
}());
var aPerson1 = new Foo();
var someObj = {
    firstName: "Gaums",
    lastName: "Kmr",
    foo: 10,
    getFullName: function () { return "Test"; }
};
aPerson1 = someObj;
console.log(aPerson1.getFullName());
