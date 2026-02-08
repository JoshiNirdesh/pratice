const userModel = require("../model/userModel");

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
    const newUser = await userModel.create({ username, email, password });
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

module.exports = registerController;
