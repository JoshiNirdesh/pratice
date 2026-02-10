const postModel = require("../model/postModel");

const createPostController = async (req,res)=>{
    const {title,isCompleted}=req.body;
    try {
        if(!title){
            return res.status(400).send({
                success:false,
                message:"All field are required"
            })
        }
        const post = await postModel.create({title,isCompleted});
        res.status(200).send({
            success:true,
            message:"Post Created",
            post
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Create post api error",
            error:error.message
        })
    }
}
module.exports = {createPostController}