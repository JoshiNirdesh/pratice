const express  = require("express");
const { createPostController } = require("../controller/postController");

const router = express.Router();


router.post("/",createPostController);

module.exports = router