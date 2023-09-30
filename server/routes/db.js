var mongoose = require('mongoose')

mongoose.connect(process.env.DB, {useNewUrlParser: true,useUnifiedTopology: true});

// Check for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


module.exports = db;