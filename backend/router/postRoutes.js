const express  = require("express");
const { createPostController, getAllPost } = require("../controller/postController");

const router = express.Router();


router.post("/",createPostController);
router.get("/",getAllPost);

module.exports = router