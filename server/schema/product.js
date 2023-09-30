const mongoose = require('mongoose');

const product = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    stock:{
        type:String,
        require:true
    },
    discount:{
        type:Number,
        default:0
    },
    detail:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = product;