function calculator (a,b,operator){
    if(operator=='+') return a+b;
    if(operator=='-') return a-b;
    if(operator=='*') return a*b;
    if(operator=='/') return a/b;
}

console.log(calculator(4,5,"+"));
console.log(calculator(4,5,"*"));
console.log(calculator(4,5,"-"));
console.log(calculator(4,5,"/"));