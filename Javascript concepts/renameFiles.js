const fs = require('fs');
const path = require('path');

const directory = './'; // Points to the current directory

fs.readdir(directory, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) return; // Skip directories

        // Match files starting with a number followed by a dot
        const match = file.match(/^(\d+)\.(.+)/);
        if (match) {
            const number = parseInt(match[1], 10);
            const rest = match[2];
            // Pad the number to 2 digits
            const paddedNumber = number.toString().padStart(2, '0');
            const newFileName = `${paddedNumber}.${rest}`;

            // Rename the file
            fs.rename(
                filePath,
                path.join(directory, newFileName),
                err => {
                    if (err) console.error(`Error renaming ${file}: ${err}`);
                    else console.log(`Renamed ${file} to ${newFileName}`);
                }
            );
        }
    });
});