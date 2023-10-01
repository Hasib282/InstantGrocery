var mongoose = require('mongoose')


const dbConnection = async ()=>{
    try{
        mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.rnvlird.mongodb.net/?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(()=>console.log("MongoDB Connected Successfully"))
    }
    catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = dbConnection;