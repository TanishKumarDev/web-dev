// Import File System module
const fs = require('fs');

try {
    // Creating a Directory (Sync)
    fs.mkdirSync('new-folder');
    console.log("✅ Directory created synchronously: new-folder");

    // Deleting a Directory (Sync)
    fs.rmdirSync('new-folder');
    console.log("✅ Directory deleted synchronously: new-folder");

} catch (err) {
    console.error("❌ Sync operation failed:", err.message);
}

// Creating a Directory (Async)
fs.mkdir('async-folder', (err) => {
    if (err) {
        console.error("❌ Error creating async directory:", err.message);
    } else {
        console.log("✅ Directory created asynchronously: async-folder");

        // Deleting a Directory (Async)
        fs.rmdir('async-folder', (err) => {
            if (err) {
                console.error("❌ Error deleting async directory:", err.message);
            } else {
                console.log("✅ Directory deleted asynchronously: async-folder");
            }
        });
    }
});

// Key Points

// mkdirSync / rmdirSync → Blocking, program waits until done.

// mkdir / rmdir → Non-blocking, use callback for success/error.

// Empty requirement → rmdir only works on empty folders.

// Error Handling → Always wrap sync in try-catch, async already provides error in callback.