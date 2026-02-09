async function fetchData(params) {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let d  = await res.json();
        console.log(d);
    }catch(error){
        console.error("error occured:", error.message)
    }
}

fetchData();