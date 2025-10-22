const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.body)
    res.send('this is default page');
});
app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) =>{
    res.send('About Page');
})
app.get('/contact', (req, res) =>{
    res.send('Contact Page');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});