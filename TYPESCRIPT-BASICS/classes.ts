class Person {

    //firstName : string;
    //private lastName : string;
    //readonly name ;

    constructor (public firstName : string , private lastName : string, readonly name: string){
     //this.firstName = firstName;
     //this.lastName = lastName;
     //this.name = name
    }

    getLastName (): string {
    return this.lastName;
    }

    setLastName (lastName : string) {
        return this.lastName = lastName;
        }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }

    greet(){
        console.log("hello Person");
    }
}

//This class will be used in another file
export class Person1 {

    firstName : string;
    lastName : string;

   constructor (firstName : string , lastName : string){
    this.firstName = firstName;
    this.lastName = lastName;
   }

   getFullName(){
       return this.firstName + " " + this.lastName;
   }
}

class Programmer extends Person {

    greet(){
        console.log("hello Programmer");
    }

    greetForPerson(){
        super.greet()
    }

}

var aPerson = new Person ("Gautam", "Kumar", "Test");
aPerson.firstName = "Gaums";
aPerson.setLastName("Kmr");
//aPerson.name = "Test";
console.log(aPerson.getFullName())


let inheritPerson : Person = new Programmer("Gaums", "Kmr", "Test");
inheritPerson.greet();
//inheritPerson.greetForPerson();


