const express  = require("express");
const { createPostController, getAllPost, updatePostController } = require("../controller/postController");

const router = express.Router();


router.post("/",createPostController);
router.get("/",getAllPost);
router.put("/update/:id",updatePostController)

module.exports = router