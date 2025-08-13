const getPromise = ()=>{
return new Promise ((resolve,reject)=>{
    console.log("i'm promise")
    // resolve("success");
    reject("network issue")
})
}

let promise = getPromise();
promise.then((result) => {
    console.log("Promises fulfilled...")
}).catch((err) => {
    console.log("Rejected..", err)
});



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
