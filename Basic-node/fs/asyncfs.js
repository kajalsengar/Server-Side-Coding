const fs = require ('fs');
const path = require ('path');

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname,fileName);

fs.writeFile(filePath, "This is the initial Data", 'utf-8' ,(err)=>{
    if(err)console.error(err);
    else console.log("File has been saved");
});

fs.readFile(filePath, 'utf-8' , (err , data) =>{
    if(err)console.error(err);
    else console.log(data)
} );

fs.appendFile(filePath, "\nThis is the updated Data", 'utf-8', (err) => {
    if (err) console.error(err);
    else console.log("File has been updated");
});

fs.unlink(filePath, (err) =>{
    if(err) console.error(err);
    else console.log("file has been Delete")
})