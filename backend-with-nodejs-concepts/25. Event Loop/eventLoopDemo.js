console.log("start");

setTimeout(() => {
    console.log("setTimeout");
}, 1000); // 1000ms = 1second

setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("nextTick");
});

console.log("end");