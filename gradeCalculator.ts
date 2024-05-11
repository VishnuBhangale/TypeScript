function calculateGrade(math:number,phy:number,che:number) : string
{
    var avg= ( math + phy + che ) / 3;
    if (avg<=70) {
        return `Grade C (${avg})`
    } else if (avg > 70 && avg < 90){
        return `Grade B (${avg})`
    }
        else {
            return `Grade A (${avg})`
        }
}



var math = Number(prompt('Enter the math marks'));
var phy = Number(prompt('Enter the physics marks'));
var che= Number(prompt('Enter the chemistry marks'));
console.log(calculateGrade(math , phy , che));
 
