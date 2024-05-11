enum Gender{
    Male,
    Female
}

console.log(Gender.Male);  //gives 0 index
console.log(Gender.Female); ////gives 1 index

console.log(Gender[0]);  //gives Male
console.log(Gender[1]); ////gives Female

enum WeekEnds{
    Saturday = 6,
    Sunday = 7
}

console.log(WeekEnds.Saturday);  //gives 6 index
console.log(WeekEnds.Sunday); ////gives 7 index

console.log(WeekEnds[6]);  //gives Saturday
console.log(WeekEnds[7]); ////gives Sunday

//Numeric
enum OrderStatus{
    Pending = 1,
    Processing = 2,
    Shipped = 3,
    Delivered = 4
}
 let myOrder : OrderStatus = OrderStatus.Shipped;
 console.log(myOrder);
 
//string Enum

enum PaymentMethod{
    CreditCard = 'credit-card',
    DebitCard = 'debit-card',
    PayPal = 'paypal'
}
let payment : PaymentMethod = PaymentMethod.DebitCard;
console.log(payment);