const JWT = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.status(500).send({
        success: false,
        message: "Token is required",
      });
    }
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "Invalid token",
        });
      }
      req.userId = decode._id;
      next();
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Auth middleware error",
      error: error.message,
    });
  }
};
