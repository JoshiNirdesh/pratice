const express  = require("express");
const { createPostController, getAllPost, updatePostController, deletePostController } = require("../controller/postController");

const router = express.Router();


router.post("/",createPostController);
router.get("/",getAllPost);
router.put("/update/:id",updatePostController)
router.delete("/delete/:id",deletePostController)


module.exports = router