const userModel = require("../model/userModel");
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
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
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt)
        const user = await userModel.create({username,email,password:hashPassword});
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
const loginController = async (req,res)=>{
try {
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(500).send({
            success:false,
            message:"Email password required"
        })
    }
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(400).send({
            success:false,
            message:"Invalid Credentials"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(500).send({
            success:false,
            message:"Invalid Credentials"
        })
    }
    const token = await JWT.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:"1d"})
    res.status(200).send({
        success:true,
        message:"Login Successfully",
        token,
        user,
    })
} catch (error) {
    res.status(500).send({
        success:false,
        message:"Login api error",
        error:error.message
    })
}
}
module.exports = {registerController,loginController}