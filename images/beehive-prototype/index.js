const fs = require('fs');
const path = require('path');

// Directory of the current script
const directoryPath = path.join(__dirname);

// Read directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    // Listing all files using forEach
    files.forEach(file => {
        console.log(file);
    });
});
