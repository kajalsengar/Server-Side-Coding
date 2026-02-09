try {
    let res = 10/0;
    if(!isFinite (res)){
        throw new Error("can not devide zero..");
    }
    console.log(res);
}catch (error){
    console.error("error Occurred:", error.message)
}finally{
    console.log("execution completed!")
}