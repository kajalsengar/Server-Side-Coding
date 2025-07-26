const http = require ('http');

const server = http.createServer((req,res) =>{
    if (req.url == "/") {
        res.setHeader("Contant-Type", "text/html");
        res.write("<h1> Welcome to Home Page! </h1>");
        res.end();
    }

    if (req.url == "/about") {
        res.write("Hello there are something about me!");
        res.end();
    }

    if (req.url == "/contact") {
        res.write("Here you can contact with me!");
        res.end();
    }
});


const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server listen on PORT ${PORT}`);
})