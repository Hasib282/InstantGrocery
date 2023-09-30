const express = require("express");
var app = express();
var cors = require('cors');
var mongoose = require('mongoose')
const productRoutes = require('./routes/product.js')
const env = require('dotenv/config.js')
const PORT = 8000;

app.use(cors());
app.use(express.json());




mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.rnvlird.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>console.log("MongoDB Connected Successfully"))
  .catch((err)=>console.log(err))

app.use('/product/',productRoutes);

app.listen(PORT, ()=>{
    console.log(`the Server is running into port${PORT}`);
})




