const userModel = require("../model/userModel");
const bcrypt = require("bcrypt")

const registerController = async(req,res)=>{
    try {
        const {name,email,password}=req.body;

        if(!name || !email || !password){
            return res.status(500).send({
                success:false,
                message:"Name , email , password is required",
            })
        }
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(500).send({
                success:false,
                message:"user already exist"
            })
        }
        const salt= await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const user = await userModel.create({name,email,password:hashPassword});
        res.status(200).send({
            success:true,
            message:"Register Successfully",
            user,

        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"register Api error",
            error:error.message
        })
    }
}
module.exports = {registerController};