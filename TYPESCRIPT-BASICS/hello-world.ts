var fn = () => 'response';

var v : any;

v = 10;
v = "fffhfh";

var z : number | boolean ;
z = true;
z = 20;

var a: number ;
var b : boolean;
var c: string;
var foo : undefined;
var boo : null;
var myArry : number [];

c = "Gaums";

myArry = [2, 4];
myArry.push(5);

a = myArry.pop();

//tuple
var tupleArry : [number, boolean];
tupleArry = [1, false];

//optinal argument at the end . c1 has default vaue as 7 when not supplied
function adding(a1 : number, b1 : number, c1 = 7 , d1?, e1? : number)  : number {
    return a1+b1+c1;
}

var sum = adding(5,3);
console.log(sum);