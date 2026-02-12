const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    image:{
        type:String
    },
    text:{
        type:String,
        required:true
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    comment:[{
        user:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
        text:{type:String,required:true},
        createdAt :{type:Date,default:Date.now()}
    }]
},{timestamps:true});
const postModel = mongoose.model("post",postSchema);
module.exports = postModel