const postModel = require("../model/postModel");

const createPostController = async (req,res)=>{
    try {
            const {text, image}= req.body
            if(!text ||  !image ){
                return res.status(200).send({
                    success:false,
                    message:"Text , image is required"
                })
            }
            const post = await postModel.create({text,image, user:req.userId});
            res.status(200).send({
                success:true,
                message:"Post created",
                post
            })

    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Create post error",
            error:error.message
        })
    }
}
module.exports = {createPostController}