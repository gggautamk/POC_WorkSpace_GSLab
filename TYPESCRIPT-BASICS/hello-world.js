var fn = function () { return 'response'; };
var v;
v = 10;
v = "fffhfh";
var z;
z = true;
z = 20;
var a;
var b;
var c;
var foo;
var boo;
var myArry;
c = "Gaums";
myArry = [2, 4];
myArry.push(5);
a = myArry.pop();
//tuple
var tupleArry;
tupleArry = [1, false];
//optinal argument at the end . c1 has default vaue as 7 when not supplied
function adding(a1, b1, c1, d1, e1) {
    if (c1 === void 0) { c1 = 7; }
    return a1 + b1 + c1;
}
var sum = adding(5, 3);
console.log(sum);
