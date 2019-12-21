const fs = require('fs');

function readJSON(fileName, type) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, type, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}
//async yapma sebebimiz: call stack'ta status pending olduğu için await ile işler sıralandı.
async function getFile() {
    const data = await readJSON("data.json", "utf-8")
    console.log(data);
}
//promise kullanma sebebimiz: kullanılan then ve catch
function getFileThen() {
    readJSON("data.json", "utf-8")
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

//getFile()
//getFileThen() 
module.exports.readJSON = readJSON;