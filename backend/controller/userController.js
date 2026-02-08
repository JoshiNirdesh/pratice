const userModel = require("../model/userModel");
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")

const registerController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(500).send({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User Already Exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt)
    const newUser = await userModel.create({ username, email, password:hashPassword});
    res.status(400).send({
        success:true,
        message:"Register Successfully",
        newUser
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Register API error",
      error: error.message,
    });
  }
};

const loginController = async (req,res)=>{
    const {email,password} = req.body

    try {
        if(!email || !password){
            return res.status(500).send({
                success:false,
                message:"All fields are required"
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(500).send({
                success:false,
                message:"Invalid Credentials "
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(500).send({
                success:false,
                message:"Invalid Credentials"
            })
        }
        const token = JWT.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.status(200).send({
            success:true,
            message:"Login Successfully",
            token,
            user
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Login Api error",
            error:error.message
        })
    }

}

module.exports = {registerController,loginController};
