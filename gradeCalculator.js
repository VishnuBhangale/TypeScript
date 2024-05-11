function calculateGrade(math, phy, che) {
    var avg = (math + phy + che) / 3;
    if (avg <= 70) {
        return "Grade C (".concat(avg, ")");
    }
    else if (avg > 70 && avg < 90) {
        return "Grade B (".concat(avg, ")");
    }
    else {
        return "Grade A (".concat(avg, ")");
    }
}
var math = Number(prompt('Enter the math marks'));
var phy = Number(prompt('Enter the physics marks'));
var che = Number(prompt('Enter the chemistry marks'));
console.log(calculateGrade(math, phy, che));
