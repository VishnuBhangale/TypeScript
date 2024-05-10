var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayCarInfo = function () {
        console.log("This is a ".concat(this.year, " ").concat(this.brand, " ").concat(this.model));
    };
    return Car;
}());
//Creating the instance of car class
var objCar = new Car('TATA', 'Harrier', 2024);
objCar.displayCarInfo();
