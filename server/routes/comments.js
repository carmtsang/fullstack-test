const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();
const Comment = require("../models/comment");

// getting comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// posting comment
router.post("/", async (req, res) => {
  const comment = new Comment({
    name: !req.body.name ? "Anonymous User" : req.body.name,
    comment: req.body.comment,
  });
  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// posting a reply
router.post("/:id", async (req, res) => {
  const reply = {
    name: !req.body.name ? "Anonymous User" : req.body.name,
    comment: req.body.comment,
  };
  const comment = await Comment.findById(req.params.id);
  if (comment === null) {
    return res.status(404).json({ message: "Cannot find comment" });
  }
  try {
    comment.replies.push(reply);
    const newReply = await comment.save();
    res.status(201).json(newReply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
