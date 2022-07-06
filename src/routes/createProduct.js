/*****  Requires    *****/
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const createProdController = require('../controllers/createProduct');

/*****  Multer  *****/
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname,'../../public/images/new-products'));
    },
    filename: (req, file, cb) =>{
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName)
    }
})
const upload = multer({storage})

/*****  Routes  *****/
router.get('/createProduct', createProdController.viewForm);
router.post('/createProduct', upload.any('images-create'),(req, res, next)=>{
    console.log('files uploaded');
    next();
}, createProdController.createNew);

/*****  Exports *****/
module.exports = router;