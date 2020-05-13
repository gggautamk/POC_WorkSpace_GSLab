import {Person1} from './classes';

function echo1<T>(arg: T): T {
return arg;
}

var sbc = echo1(1);


class Admin extends Person1 {

}

class Manager extends Person1 {

}

let manager = new Manager("M", "M");
let admin = new Admin("A", "A");

function personEcho<T extends Person1>(person: T): T {
 return person;
}

var foo1 = personEcho(admin);
var bar = personEcho(manager);

console.log(bar.getFullName());
