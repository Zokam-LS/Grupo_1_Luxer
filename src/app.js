/*****  Requires    *****/
const express = require('express');
const app = express();
const path = require('path');
    /*****  Routers *****/
const createModifyProdRouter = require('./routes/createModifyProduct')


/*****  Port    *****/
const port = 7000;

/*****  Middlewares *****/
app.use(express.static('public'));

/*****  EJS - Template Engine   *****/
app.set('view engine', 'ejs');
app.set('views', './src/views');

/*****  Route System    *****/
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/productsDetails', (req, res) => {
    res.render('productsDetails.ejs')
})
app.get('/register', (req, res) => {
    res.render('register.ejs')
})
app.get('/shoppingCart', (req, res) => {
    res.render('shoppingCart.ejs')
})
app.get('/createProduct', (req, res) => {
    res.render('createProduct.ejs')
})
app.get('/modifyProduct', (req, res) => {
    res.render('modifyProduct.ejs')
})
app.get('/allProducts', (req, res) => {
    res.render('allProducts.ejs')
})
app.get('/allUsers', (req, res) => {
    res.render('allUsers.ejs')
})

app.use(createModifyProdRouter);

/***** Port Run *****/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})