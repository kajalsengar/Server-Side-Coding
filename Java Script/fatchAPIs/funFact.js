const url = "https://official-joke-api.appspot.com/random_joke";
const paraFact = document.querySelector("#fact");

const getFact = async () => {
    console.log("Getting data...")
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
   
}