interface IPersonService {
    getDetails():String;//Returns a string data
}

class Person implements IPersonService{
    constructor() {

    }
    FirstName:String
    LastName:String
    Age:Number
    Gender:GenderEnum
    DateOfBirth:Date
    getDetails():String {
        console.log("What the heck!!!");
        return this.FirstName;
    }
}

class Student extends Person {
    constructor(standard:String) {
        super();
        this.Standard = standard;
    }
    Standard:String
}

enum GenderEnum {
    Male,
    Female
}

var person = new Person()
var student = new Student("Manish")

//person.DateOfBirth = "manish";//This is error as the type is different