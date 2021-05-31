const fs = require('fs');

//writes text to file and returns contents

writeFile = (filePath, contents) => {
    contents = fs.writeFileSync(filePath, contents);
    return contents;
}

//reads contents of file

readContents = (filePath) => {
    let contents = fs.readFileSync(filePath, 'utf-8');
    return contents;
}

//appends text to file and returns contents

appendFile = (filePath, contents) => {
    fs.appendFileSync(filePath, contents);
    contents = fs.readFileSync(filePath, 'utf-8');
    return contents;
}

//deletes file

 deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log(`THREAT DISABLED: ${filePath}`);
    });
    } 
  


//export module
module.exports = { 
    writeFile,
    appendFile,
    deleteFile,
};