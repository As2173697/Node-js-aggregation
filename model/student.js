
var mongoose=require('mongoose');
const { Schema } = mongoose;

 
var StudentSchema = new mongoose.Schema({
    StudentId:Number,
    Name:String,
    Roll:Number,
    Birthday:Date,
    Address:{
        name : String , 
        currentAddress : {
            name : String
        }
    },
    hometown: {
        type : Schema.Types.ObjectId,
        ref  : "location"
    }
} , {timestamps : true});
 
module.exports = mongoose.model(
    'student', StudentSchema, 'Students');