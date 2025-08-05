let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " Welcome to Java Script";


let divs = document.querySelectorAll(".box")

let idx = 1;
for (let div of divs) {
    div.innerText = `This unique value of ${idx}`;
    idx++;
}


