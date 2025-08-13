function asyncFunc1(){
return new Promise ((Resolve, Reject)=>{
setTimeout(() => {
    console.log("some data1");
    Resolve("success");
}, 3000);
});
}

function asyncFunc2() {
   return new Promise  ((Resolve, Reject) => {
        setTimeout(() => {
            console.log("some data2");
            Resolve("success");
        }, 3000);
    });
}

console.log("fetching data1...");
asyncFunc1().then((res) => {
    console.log("fetching data2...");
    asyncFunc2().then((res) => {
        console.log(res);
    })

})


//Promise chaining


// function getData(dataId, getNextData) {
//   return new Promise((Resolve ,Reject)=>{
//       setTimeout(() => {
//         Reject("error")
//           console.log( "data " ,dataId );
//         if (getNextData) {
//             getNextData();
//         }
//       }, 2000);
//   })
// }
