const path = require("path");

console.log(__dirname);
console.log(__filename);

const filePath = path.join(" folder ", "student", "data.txt");
console.log(filePath);


const parseData = path.parse(filePath)
const resolvePath = path.resolve(filePath);
const extName = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);


console.log({
    parseData,
    resolvePath,
    extName,
    baseName,
    dirName,
    separator: path.sep,
});