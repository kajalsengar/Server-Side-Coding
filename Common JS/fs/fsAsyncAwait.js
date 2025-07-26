const fs = require ('fs/promises');
const path = require ('path');

const fileName = "asyncAwaitFs.txt";
const filePath = path.join(__dirname, fileName);

const filePath1 = __dirname;


const readFolder = async ()=>{
    try {
       const res=  await fs.readdir(filePath1);
       console.log(res)
    } catch (error) {
        console.log(error);
    }
}
readFolder();

const writeFileExample = async () =>{
    try {
       await fs.writeFile(filePath, 'This is the initial Data' , 'utf-8')
        console.log("File created successfully!");
    } catch (error) {
        console.log(error);
    }
}
writeFileExample()

const readFileExample  =  async () =>{
    try {
        const data = await fs.readFile(filePath , "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
readFileExample();

const appendFileExample = async () =>{
    try {
     await fs.appendFile(filePath , "\n This is a updated Data");
     console.log("File updated successfully!")
    } catch (error) {
        console.log(error)
    }
}
appendFileExample();

const deleteFileExample = async () =>{
    try {
       await fs.unlink(filePath);
       console.log("File deleted Successfully!")
    } catch (error) {
        console.log("Error deleting file", error)
    }
}
deleteFileExample();