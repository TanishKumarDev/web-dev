function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 1000);
    });
}

async function main() {
    try {
        const result = await getNumber();
        console.log('Result:', result);
    } catch (err) {
        console.log('Error:', err);
    }
}

main();
