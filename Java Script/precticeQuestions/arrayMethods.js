let marks = [99,67,98,90,56,97];

let higherMarks = marks.filter((value) =>{
    return value>90;
})

console.log(higherMarks);

let n = prompt("Enter a number from 1 to 10 ");
arr =[];

for(let i=0; i<=n; i++){
 arr[i-1] = i;
}

console.log(arr);

const sum = arr.reduce((res, curr)=>{
    return res+curr;
});

const product = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("Sum of array =" , sum);
console.log("Product of array =", product);