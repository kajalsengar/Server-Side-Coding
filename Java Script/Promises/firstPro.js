const myPromise =new Promise ((resolve,reject)=>{
    let success= true;
    setTimeout(()=>{
        if(success){
            resolve("promise is fullfilled..")
        }else{
            reject("promise is rejeted...")
        }
    },2000);
});

myPromise.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
