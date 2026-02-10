const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    isCompleted:{
        type:String,
        required:true,
        default:false
    }
},{timestamps:true});

const postModel = mongoose.model("post",postSchema);
module.exports = postModel