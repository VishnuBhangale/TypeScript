interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
   
    // this is only declaration
    log(message: string) : void;
}




let objProduct1: IProduct = {

    // we have provided implementation for IProduct interface.
    id: 0,
    name: "",
    description: "",
    price: 0,
    // this is implementation.
    log: function (message: string): void {
        throw new Error("Function not implemented.");
    }
}