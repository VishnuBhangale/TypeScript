interface IExterior {
  color: string;

  numOdDoors: number;
}

interface IInterior {
  seats: number;

  auto: boolean;
}

interface ICar extends IExterior, IInterior {
  make: string;

  model: string;

  year: string;
}

let myCar: ICar = {
  make: "TATA",

  model: "Altroz",

  year: "2023",

  color: "Gray",

  numOdDoors: 4,

  seats: 5,

  auto: false,
};

console.log(myCar);

class Car implements ICar{
    make: string;
    model: string;
    year: string;
    color: string;
    numOdDoors: number;
    seats: number;
    auto: boolean;

}

let objCar=new Car();
objCar.color="White";
objCar.year="2024"