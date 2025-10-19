// Using built-in modules
const os = require('os');
const path = require('path');

console.log("OS Information:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());

console.log("\nPath Operations:");
console.log("Directory separator:", path.sep);
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);