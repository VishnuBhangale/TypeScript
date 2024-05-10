var input : any = prompt('Enter a number');
let UserName = input as number;
let result = UserName * 2;
console.log('Using as ',result);

var userInput : any = prompt('Enter a number');
let Numbers = <number> userInput;
let results = Numbers * 4;
console.log('Using Angle Bracket <> ',results);