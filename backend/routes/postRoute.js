const express = require("express");
const { createPostController } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create",createPostController)

module.exports = router