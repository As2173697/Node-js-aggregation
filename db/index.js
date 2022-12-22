const mongoose = require("mongoose");
var express = require('express');
var router = express.Router();
// const dbUrl = "mongodb+srv://myfirstapp:HLFB0S8o6YpAIutl@cluster0.wcmvli0.mongodb.net/test"
const dbUrl = "mongodb://localhost/test"

mongoose.set('strictQuery', false);

mongoose.connect(dbUrl, { useNewUrlParser : true,
    useUnifiedTopology: true }, function(error) {
        if (error) {
            console.log("Error!" + error);
        }
    });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("mongoose is running successfully")
});




module.exports = router;