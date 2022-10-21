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
router.post("/", (req, res) => {});

module.exports = router;
