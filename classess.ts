class Car{

    //properties
    brand:string;
    model:string;
    year:number;

    constructor(brand:string,model:string,year:number)
    {
        this.brand=brand;
        this.model=model;
        this.year=year;
    }

    displayCarInfo():void
    {
        console.log(`This is a ${this.year} ${this.brand} ${this.model}`);
        
    }
}

//Creating the instance of car class
var objCar=new Car('TATA','Harrier',2024);
objCar.displayCarInfo();