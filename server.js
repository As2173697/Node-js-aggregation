const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("./db/index");
const indexRoute = require("./indexRoutes");


app.use(cors());

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());

app.use('/api',indexRoute)

app.listen(4000,()=>{
    console.log("server is listen on port 4000")
})