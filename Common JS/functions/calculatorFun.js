function calculator (a,b,operator){
    if(operator=='+') return a+b;
    if(operator=='-') return a-b;
    if(operator=='*') return a*b;
    if(operator=='/') return a/b;
}

(function(){
    console.log(5+100);
})();

console.log(calculator(4,5,"+"));
console.log(calculator(4,5,"*"));
console.log(calculator(4,5,"-"));
console.log(calculator(4,5,"/"));