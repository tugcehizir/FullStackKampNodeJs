const fs = require('fs');
const fileName = process.argv[2] + ".txt";
const dataToWrite = process.argv[3];

fs.writeFile(fileName, dataToWrite, (err) => {
    if (err) throw err;
    console.log(`${fileName} içine ${dataToWrite} yazıldı.`);
});

//node writeFile.js dosyaAdı "içerik: .."

//dosyaAdi.txt "içerik: .."