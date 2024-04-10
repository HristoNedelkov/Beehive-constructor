const fs = require('fs');
const path = require('path');

// Directory of the current script
const directoryPath = path.join(__dirname);

// Read directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    // Create an array to hold the file names
    const fileList = [];

    // Add each file to the array
    files.forEach(file => {
        fileList.push(file);
    });

    // Console log the array
 
});
