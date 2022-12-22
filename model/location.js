const mongoose  = require("mongoose");
const {Schema} = mongoose;

var locationSchema = new Schema({
    name : String
});

module.exports = mongoose.model("location", locationSchema);

mongoose.model("location", locationSchema).find({} , (error , success)=>{
  if (success.length ===0 ){
    var obj1 = {
        name : "Delhi"
    }
    var obj2 = {
        name : "Lucknow"
    }
    var obj3 = {
        name : "Mumbai"
    }
    var obj4 = {
        name : "Banglore"
    }
  mongoose.model("location", locationSchema).create(obj1 , obj2 , obj3 , obj4 , (err, result)=>{
     if (err) console.log("location error ", err);
     else console.log('location result',result)
  })
}

})