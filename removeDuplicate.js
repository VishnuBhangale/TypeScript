var RemoveDuplicate = /** @class */ (function () {
    function RemoveDuplicate(firstName, LastName) {
        this.firstName = firstName;
        this.LastName = LastName;
    }
    RemoveDuplicate.prototype.RemoveDupElement = function (arr) {
        var unique = [];
        for (var index = 0; index < arr.length; index++) {
            if (!unique.includes(arr[index])) {
                unique.push(arr[index]);
            }
        }
        return unique;
    };
    return RemoveDuplicate;
}());
var arrayNumber = [1, 2, 2, 4, 5, 4, 7, 8, 7, 36];
console.log("Given Array: ".concat(arrayNumber));
var obj = new RemoveDuplicate("jack", "Mac");
console.log("After remove Duplicate ");
console.log(obj.RemoveDupElement(arrayNumber));
