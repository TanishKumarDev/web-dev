const fs = require('fs');
const path = require('path');

const filePath1 = path.join(__dirname, 'a.txt');
const filePath2 = path.join(__dirname, 'b.txt');
const filePath3 = path.join(__dirname, 'c.txt');

// 1️⃣ Sequentially using separate readFile calls
fs.readFile(filePath1, 'utf-8', (err, data1) => {
    if (err) throw err;
    console.log('File 1:', data1);

    fs.readFile(filePath2, 'utf-8', (err, data2) => {
        if (err) throw err;
        console.log('File 2:', data2);

        fs.readFile(filePath3, 'utf-8', (err, data3) => {
            if (err) throw err;
            console.log('File 3:', data3);
        });
    });
});

// 2️⃣ Using fs.readFileSync (synchronous)

// const data1 = fs.readFileSync(filePath1, 'utf-8');
// const data2 = fs.readFileSync(filePath2, 'utf-8');
// const data3 = fs.readFileSync(filePath3, 'utf-8');

// console.log('File 1:', data1);
// console.log('File 2:', data2);
// console.log('File 3:', data3);

// 3️⃣ Better way using Promise & fs.promises


// async function readFiles() {
//     try {
//         const filePath1 = path.join(__dirname, 'a.txt');
//         const filePath2 = path.join(__dirname, 'b.txt');
//         const filePath3 = path.join(__dirname, 'c.txt');

//         const data1 = await fs.readFile(filePath1, 'utf-8');
//         const data2 = await fs.readFile(filePath2, 'utf-8');
//         const data3 = await fs.readFile(filePath3, 'utf-8');

//         console.log('File 1:', data1);
//         console.log('File 2:', data2);
//         console.log('File 3:', data3);
//     } catch (err) {
//         console.error(err);
//     }
// }

// readFiles();
