// function asyncFunc1(){
// return new Promise ((Resolve, Reject)=>{
// setTimeout(() => {
//     console.log("some data1");
//     Resolve("success");
// }, 3000);
// });
// }

// function asyncFunc2() {
//    return new Promise  ((Resolve, Reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             Resolve("success");
//         }, 3000);
//     });
// }

// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//     console.log("fetching data2...");
//     asyncFunc2().then((res) => {
//         console.log(res);
//     })

// })


//Promise chaining


function getData(dataId) {
  return new Promise((Resolve ,Reject)=>{
      setTimeout(() => {
        // Reject("error");
        Resolve("success !")
          console.log( "data",dataId);
      }, 3000);
  })
}

console.log("Getting data 1.")
getData(1).then((res)=>{
    console.log("Getting data 2..")
   return getData(2);
}).then((res)=>{
    console.log("Getting data 3...")
    return getData(3);
    }).then((res)=>{
        console.log(res)
    })

