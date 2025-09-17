// Import File System module
const fs = require('fs');

// 1️⃣ Reading a File (Non-blocking)
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("❌ Error reading file:", err.message);
        return;
    }
    console.log("📖 File Content:\n", data);

    // 2️⃣ Writing a File (Async)
    fs.writeFile('output.txt', 'Async write!', (err) => {
        if (err) {
            console.error("❌ Error writing file:", err.message);
        } else {
            console.log("✅ File written successfully: output.txt");

            // 3️⃣ Appending to a File (Async)
            fs.appendFile('output.txt', '\nAsync append', (err) => {
                if (err) {
                    console.error("❌ Error appending file:", err.message);
                } else {
                    console.log("✅ Data appended successfully: output.txt");
                }
            });
        }
    });
});
