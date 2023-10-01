const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const multer = require("multer");
const path = require('path');
const fs = require('fs');

const productSchema = require('../schema/product');
const { error } = require("console");
const product = new mongoose.model('Product', productSchema);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< multer file upload + validation part start

//file name and destination declare
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try {
            if (!fs.existsSync('./productImg')) {
                // Create the directory.
                fs.mkdir('./productImg', (err) => {
                    if (err) {
                        throw err;
                    }
                });
            }
            cb(null, './productImg');
        }
        catch (err) {
            cb(err)
        }

    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").split(" ").join('_') + "-" + Date.now();
        cb(null, fileName + fileExt)
    },
})


//file validation
var upload = multer({
    storage: storage,
    limits: {
        fileSize: 100000,
    },
    fileFilter: (req, file, cb) => {
        console.log(file);
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/webp") {
            cb(null, true);
        }
        else {
            cb(error("only jpg, jpeg, png or webp file"))
        }
    }
})


//multer error handling
router.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send("There is an file upload error");
        }
        else {
            res.status(500).send(err.message);
        }
    }
    else {
        res.send("success");
    }
})

//multer file upload + validation part end >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< API routes start from here

//get all product
router.get('/', async (req, res) => {
    try {
        let products = await product.find();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
})


//get product by category
router.get('/:category', async (req, res) => {
    try {
        let products = await product.find({ category: req.params.category })
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
})


//search product
router.get('/search', (req, res) => {

})



//add product
router.post('/add', upload.single("image"), async (req, res) => {
    try {
        const newProduct = new product(req.body);
        newProduct.image = req.file.filename;
        await newProduct.save()
        res.status(200).json(newProduct);
    }
    catch (err) {
        res.status(500).json({ error: err })
    }

})




//update product
router.put('/:id', upload.single("image"), async (req, res) => {
    try {
        const updatedProduct = await new product(req.body);
        
        updatedProduct.image = req.file.filename;
        updatedProduct._id = req.params.id;
        console.log(updatedProduct);
        const update = await product.updateOne({ _id: req.params.id }, {$set:updatedProduct},{useFindAndModify:false,new:true});
        // res.status(200).json({ message: "Update Successful" });
        res.send(updatedProduct)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})



//delete product
router.delete('/:id', async (req, res) => {

})


//get image
const productImgDir = path.join(__dirname, '..', 'productImg');
router.use('/productImage', express.static(path.join(productImgDir)));

router.get('/image/:imageName', (req, res) => {
  const { imageName } = req.params;
  const imagePath = path.join(productImgDir, imageName);

  res.sendFile(imagePath);
});


// API routes end here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//multer error handling
router.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            next("There is an file upload error");
        }
        else {
            res.send(err.message);
        }
    }
    else {
        res.send("success");
    }
})

module.exports = router;
