// Promise Create
function fakeDBQuery(query) {
    return new Promise((resolve, reject) => {
        console.log(`Running query: ${query}...`);

        setTimeout(() => {
            if (query === "SELECT * FROM users") {
                resolve(["Tanish", "Rahul", "Priya"]); // success result
            } else {
                reject(new Error("Invalid Query ❌")); // error case
            }
        }, 1500);
    });
}

// Consuming with .then() and .catch()
fakeDBQuery("SELECT * FROM users")
    .then(result => {
        console.log("✅ Query Success (then):", result);
    })
    .catch(err => {
        console.error("❌ Query Failed (then):", err.message);
    })
    .finally(() => {
        console.log("🎯 Done with .then/.catch\n");
    });

// Consuming with async/await + try/catch
async function runQueries() {
    try {
        const result1 = await fakeDBQuery("SELECT * FROM users");
        console.log("✅ Query Success (async/await):", result1);

        // Forcing error
        const result2 = await fakeDBQuery("DROP TABLE users");
        console.log("✅ Query Success (async/await):", result2);

    } catch (err) {
        console.error("❌ Query Failed (async/await):", err.message);
    } finally {
        console.log("🎯 Done with async/await");
    }
}

runQueries();
