const express  = require("express");
const { createPostController, getAllPost, updatePostController, deletePostController } = require("../controller/postController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/",authMiddleware,createPostController);
router.get("/",getAllPost);
router.put("/update/:id",updatePostController)
router.delete("/delete/:id",deletePostController)


module.exports = router