//this is my base class
class ElectronicDevice{
    isOn :boolean;
    name:string;
    /**
     Parameterized constructor
     */
    constructor(name:string) {
        
        this.isOn=false;
        this.name=name;
    }
    turnOn():void
    {
        this.isOn=true;
        console.log(`${this.name } is turn on`);
        
    }
    turnOff():void
    {
        this.isOn=false;
        console.log(`${this.name } is turn off`);
    }
}
class Laptop extends ElectronicDevice{
    batteryLevel : number;
    /**
     *
     */
    constructor(name:string,batteryLevel:number) {
        super(name); // call base class constructor
        this.batteryLevel=batteryLevel;

    }
    checkBattery():void{
        
        console.log(`${this.name} battery level is a ${this.batteryLevel}%`);
        
    }
}

class Phone extends ElectronicDevice{
    model : string;
    /**
     *
     */
    constructor(name:string,model:string) {
        super(name); // call base class constructor
        this.model= model;
 
    }
    makeCall(number:string):void{
        console.log(`Dialing ${number} from  ${this.name}`);
        
    }
}
const electronicDevice = new ElectronicDevice("Laptop");
let laptop = new Laptop('Dell',75)
laptop.turnOn();
laptop.checkBattery();
let phone = new Phone('Moto','g64');
phone.makeCall("123456789");
phone.turnOff();
