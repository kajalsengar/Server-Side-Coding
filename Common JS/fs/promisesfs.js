const fs = require ('fs/promises');
const path = require ('path');

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname,fileName);

// const file =  __dirname;

// fs.promises
// .readdir(file)
// .then((data) => console.log (data))
// .catch((err) => console.error(err));

fs.writeFile(filePath , "This is the initial Data" ,'utf-8')
.then(console.log("File created Successfully!"))
.catch((err) => console.error(err));

fs.readFile(filePath, 'utf-8')
.then((data) => console.log(data))
.catch((err) => console.error(err));

fs.appendFile(filePath, "\nThis is the updated Data", 'utf-8')
    .then(console.log("File updated Successfully!"))
    .catch((err) => console.error(err));

fs.unlink(filePath)
.then(console.log("file deleted successfully!"))
.catch((err) =>console.error("Error deleting file", err));


