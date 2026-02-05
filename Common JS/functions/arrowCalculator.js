 let calculator=(a,b,operator)=>{
    if(operator=="+") return a+b;   
    if(operator=="-") return a-b;
    if(operator=="*") return a*b;
    if(operator=="/") return a/b;
 }

 console.log(calculator(5,6,"+"));
  console.log(calculator(5,5,"-"));
   console.log(calculator(5,7,"*"));
    console.log(calculator(5,3,"/"));