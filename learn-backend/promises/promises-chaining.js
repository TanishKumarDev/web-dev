// Promise Chaining Kya Hai?

// Ek Promise ka result doosre .then() me pass hota rehta hai.
// Isse sequential async tasks bina callback hell ke likh sakte hain.
// Har .then() apna return value next .then() ko deta hai.

// ⚡ Example 1 – Simple Chaining
new Promise((resolve, reject) => {
    resolve(10); // start with 10
})
.then(num => {
    console.log("Step 1:", num);
    return num * 2; // return → goes to next then
})
.then(num => {
    console.log("Step 2:", num);
    return num + 5;
})
.then(num => {
    console.log("Step 3:", num);
    return num - 3;
})
.then(finalResult => {
    console.log("✅ Final Result:", finalResult);
});

// ⚡ Example 2 – Async Work in Chaining
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000)
    .then(() => {
        console.log("⏳ Waited 1s");
        return wait(2000); // returns another promise
    })
    .then(() => {
        console.log("⏳ Waited 2s");
        return wait(1000);
    })
    .then(() => {
        console.log("⏳ Waited 1s again");
    });

// ⚡ Example 3 – Error in Chaining
new Promise((resolve, reject) => {
    resolve("Start");
})
.then(data => {
    console.log(data);
    throw new Error("Something went wrong!");
})
.then(() => {
    console.log("This will NOT run");
})
.catch(err => {
    console.error("❌ Caught:", err.message);
})
.then(() => {
    console.log("👉 Chain continues after catch");
});
