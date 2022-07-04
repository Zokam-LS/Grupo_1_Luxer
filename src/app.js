const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('pages'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/home/home.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/login/login.html'))
})
app.get('/productsDetails', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/productsDetails/productsDetails.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/register/register.html'))
})
app.get('/shoppingCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/shoppingCart/shoppingCart.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})