class RemoveDuplicate {
  private firstName: string;
  private LastName: string;

  constructor(firstName: string, LastName: string) {
    this.firstName = firstName;
    this.LastName = LastName;
  }

  RemoveDupElement(arr: number[]) {
    const unique: any = [];
    for (let index = 0; index < arr.length; index++) {
      if (!unique.includes(arr[index])) {
        unique.push(arr[index]);
      }
    }
    return unique;
  }
}
let arrayNumber: number[] = [1, 2, 2, 4, 5, 4, 7, 8, 7, 36];
console.log(`Given Array: ${arrayNumber}`);
const obj = new RemoveDuplicate("jack", "Mac");
console.log(`After remove Duplicate `);
console.log(obj.RemoveDupElement(arrayNumber));
