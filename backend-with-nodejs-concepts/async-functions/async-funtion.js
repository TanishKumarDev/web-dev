// async function
async function asyncFun() {
    return 'Data fetched successfully!';
}

asyncFun().then(data => console.log(data));
asyncFun();

// async function - Using async/await
async function asyncFunWithAwait() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully! with await');
        }, 3000);
    });

    const result = await promise;
    console.log(result);
}
asyncFunWithAwait();

// async function - Error handling with try/catch
async function asyncFunWithError() {
    try {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Something went wrong!'));
            }, 3000);
        });
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error('Error caught:', error.message);
    }
}
asyncFunWithError();