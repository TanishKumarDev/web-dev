// path_demo.js
const path = require('path');

// Helper function to log results clearly
const logSection = (title) => {
    console.log(`\n=== ${title} ===`);
};

// 1. Test path.join()
logSection('Testing path.join()');
const joinedPath = path.join('src', 'config', 'settings.json');
console.log('Joined path:', joinedPath); // Output: src/config/settings.json (or \ on Windows)

// 2. Test path.resolve() with __dirname
logSection('Testing path.resolve()');
const absolutePath = path.resolve(__dirname, 'data', 'users.csv');
console.log('Absolute path:', absolutePath); // Output: Full path to data/users.csv

// 3. Test path.basename(), path.dirname(), and path.extname()
logSection('Testing path parsing methods');
const samplePath = '/home/user/project/index.js';
const baseName = path.basename(samplePath); // 'index.js'
const baseNoExt = path.basename(samplePath, '.js'); // 'index'
const dirName = path.dirname(samplePath); // '/home/user/project'
const extName = path.extname(samplePath); // '.js'

console.log('Sample path:', samplePath);
console.log('Base name:', baseName);
console.log('Base without extension:', baseNoExt);
console.log('Directory:', dirName);
console.log('Extension:', extName);

// 4. Practical example: Combine methods for a config file
logSection('Practical Example: Config File Path');
const configPath = path.join(__dirname, 'config', 'app.json');
const configFileName = path.basename(configPath); // 'app.json'
const configDir = path.dirname(configPath); // Full path to config folder
const configExt = path.extname(configPath); // '.json'

console.log('Config path:', configPath);
console.log('Config file name:', configFileName);
console.log('Config directory:', configDir);
console.log('Config extension:', configExt);

// 5. Exercise: Check if file is JavaScript
logSection('Exercise: Check File Type');
const checkFileType = (filePath) => {
    const ext = path.extname(filePath);
    if (ext === '.js') {
        console.log(`✅ ${path.basename(filePath)} is a JavaScript file`);
    } else {
        console.log(`❌ ${path.basename(filePath)} is not a JavaScript file (extension: ${ext})`);
    }
};

checkFileType('/path/to/script.js'); // ✅ script.js is a JavaScript file
checkFileType('/path/to/document.pdf'); // ❌ document.pdf is not a JavaScript file

// 6. Bonus: Display OS-specific separator
logSection('OS-Specific Separator');
console.log('Path separator for this OS:', path.sep); // Output: / (Linux/macOS) or \ (Windows)