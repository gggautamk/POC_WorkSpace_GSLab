interface PersonInterface{

    firstName : string;
    lastName : string;
    getFullName() : string;
}

class Foo implements PersonInterface {

    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
    

}

let aPerson1 : PersonInterface = new Foo();

let someObj = {
    firstName : "Gaums",
    lastName : "Kmr",
    foo : 10,
    getFullName: () => "Test"
};

aPerson1 = someObj;
console.log(aPerson1.getFullName());
