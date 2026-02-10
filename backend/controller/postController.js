const postModel = require("../model/postModel");

const createPostController = async (req, res) => {
  const { title, isCompleted } = req.body;
  try {
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "All field are required",
      });
    }
    const post = await postModel.create({ title, isCompleted });
    res.status(200).send({
      success: true,
      message: "Post Created",
      post,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Create post api error",
      error: error.message,
    });
  }
};
const getAllPost = async (req, res) => {
  try {
    const post = await postModel.find();
    res.status(200).send({
      success: true,
      post,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "get all post error",
      error: error.message,
    });
  }
};
const updatePostController = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Id is required",
      });
    }

    const { title, isCompleted } = req.body;

    if (!title) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    const post = await postModel.findByIdAndUpdate(
      id, 
      { title, isCompleted },
      { new: true },
    );

    if (!post) {
      return res.status(404).send({
        success: false,
        message: "Post not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Post updated",
      post,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Update post error",
      error: error.message,
    });
  }
};

module.exports = { createPostController, getAllPost, updatePostController };
