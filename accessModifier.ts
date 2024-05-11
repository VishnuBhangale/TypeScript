class Person{
    private ssn:string;
    private firstName:string;
    private lastName:string;
    constructor(ssn: string , firstName: string , lastName: string)
    {
            this.ssn=ssn;
            this.firstName=firstName;
            this.lastName=lastName;
    }
    getFullName():string
    {
        return `${this.firstName}${this.lastName}`
    }
}

//Create object of person
const person=new Person('1210','Rocky','Bahai');
//console.log(person.ssn); // ssn is private and only accessible within class only
console.log(person.getFullName());

// Example for protected access modifiers 

class Employee {
    protected sn : string;
}

class Test extends Employee {

    getEmployeeSn() {
        return `Employee SN : ${this.sn}`
    }
}

