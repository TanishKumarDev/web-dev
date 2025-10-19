// process.js
console.log("🤝 Process Information:");
console.log("Current directory:", process.cwd());
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Arguments:", process.argv);

// Command line arguments
const args = process.argv.slice(2);
console.log("Your arguments:", args);