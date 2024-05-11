function myFriendName(name) {
    if (name === void 0) { name = "jack"; }
    console.log("My friend Name ".concat(name));
}
myFriendName('Vishnu');
myFriendName();
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100));
