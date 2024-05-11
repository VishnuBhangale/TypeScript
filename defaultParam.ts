function myFriendName(name:string="jack")
{
    console.log(`My friend Name ${name}`);
    
}
myFriendName('Vishnu');
myFriendName();


function applyDiscount(price: number, discount: number = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100));