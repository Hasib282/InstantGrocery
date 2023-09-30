const express = require("express");
const mongoose =require('mongoose');
const router = express.Router();

const productSchema = require('../schema/product');
const product = new mongoose.model('Product',productSchema);



router.get('/',async(req,res)=>{
    try{
        let products = await product.find();
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({error:err})
    }
})


router.get('/:category',async(req,res)=>{
    try{
        let products = await product.find({category:req.params.category})
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({error:err})
    }
})



router.get('/search',(req,res)=>{
    
})


router.post('/add', async (req,res)=>{
    try{
        const newProduct = new product(req.body);
        await newProduct.save()
        res.status(200).json(newProduct);
    }
    catch(err){
        res.status(500).json({error:err})
    }
    
})





router.put('/:id',async(req,res)=>{
    try{
        await product.updateOne({_id:req.params.id},req.body);
        res.status(200).json({message:"Update Successful"});
    }
    catch(err){
        res.status(500).json({error:err})
    }
})


router.delete('/:id',async(req,res)=>{

})




module.exports = router;
