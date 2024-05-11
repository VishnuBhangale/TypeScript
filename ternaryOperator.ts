let age = Number(prompt('Enter your age'));

let message = age >=18 ? 'You are eligible to vote': 'You are not eligible to vote'
console.log(message);

let firstName : string = 'Harmayni';

let lastName : string | null = null;


let fullName = lastName ? `${firstName} ${lastName}` : firstName;

console.log(fullName);