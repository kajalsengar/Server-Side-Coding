function delayMsg(callback){
    setTimeout(() =>{
        console.log("callback run after 2 sec...")
        
     } ,2000)
     callback();
    }

    function done(){
        console.log("callback run after 2 second delay")
    }

    delayMsg(done)
    
