function createQuote (quote , callback){
 let myQuote = "like i always say, " + quote;
 callback(myQuote)
}

function logQuote(quote){
    console.log(quote);
}

createQuote ("eat your vagetable " ,logQuote);
