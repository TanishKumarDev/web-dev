const basicPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 2000);
});

basicPromise.then((message) => {
    console.log(message);
});

console.log(basicPromise);

// myPromise
console.log("---myPromise---")
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if(success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }
});

myPromise
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
