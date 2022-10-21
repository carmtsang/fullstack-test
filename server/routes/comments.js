const express = require("express");
const router = express.Router();

// getting comments
router.get("/", (req, res) => {
  res.send("test??");
});

// posting comment
router.post("/", (req, res) => {});

module.exports = router;
