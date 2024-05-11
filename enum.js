var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male); //gives 0 index
console.log(Gender.Female); ////gives 1 index
console.log(Gender[0]); //gives Male
console.log(Gender[1]); ////gives Female
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds.Saturday); //gives 6 index
console.log(WeekEnds.Sunday); ////gives 7 index
console.log(WeekEnds[6]); //gives Saturday
console.log(WeekEnds[7]); ////gives Sunday
//Numeric
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 1] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 2] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 3] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 4] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
var myOrder = OrderStatus.Shipped;
console.log(myOrder);
//string Enum
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "credit-card";
    PaymentMethod["DebitCard"] = "debit-card";
    PaymentMethod["PayPal"] = "paypal";
})(PaymentMethod || (PaymentMethod = {}));
var payment = PaymentMethod.DebitCard;
console.log(payment);
