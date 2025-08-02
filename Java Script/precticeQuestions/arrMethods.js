let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(arr);

let newArr = arr.shift();
console.log(newArr);
console.log(arr);

let arr1 = arr.splice(1,1,"Ola");
console.log(arr1);
console.log(arr);

arr.push("Amazon");
console.log(arr);

console.log(arr.toString());
