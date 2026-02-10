const userModel = require("../model/userModel");

const registerController = async (req,res)=>{
    try {
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(500).send({
                success:false,
                message:"Username , email , password required"
            })
        }
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).send({
                success:false,
                message:"User already exist"
            })
        }
        const user = await userModel.create({username,email,password});
        res.status(200).send({
            success:true,
            message:"Register Successfully",
            user
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Register api error",
            error:error.message
        })
    }
}
module.exports = {registerController}