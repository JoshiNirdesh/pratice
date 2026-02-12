const JWT = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.status(400).send({
        success: false,
        message: "Token required",
      });
    }
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: "error",
          err,
        });
      }
      req.userId = decode.id;
      next();
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "auth error",
      error: error.message,
    });
  }
};
