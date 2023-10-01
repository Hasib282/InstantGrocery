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
  .catch((err)=>console.log(err.message))

app.use('/product/',productRoutes);




//error handling
app.use((err, req ,res ,next)=>{
    if(res.headersSent){
        next('there is a problem')
    }
    else{
        console.log(err)
        if(res.status(500)){
            res.send("There is a server error")
        }
        else if(req.status(404)){
            res.send("Not found")
        }
        else{
            res.send(err.message);
        }

        
    }
})


//running the backend in port 8000
app.listen(PORT, ()=>{
    console.log(`the Server is running into port${PORT}`);
})




