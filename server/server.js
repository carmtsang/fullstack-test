require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Make sure you have a .env file with this value, otherwise your DB won't work.
const mongoURL = process.env.MONGOURL;

// Once you've setup your MongoDB this will connect you
const connection = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to the DB");
  } catch {
    console.error("There is an error with your DB connection");
  }
};

connection();

// To test this route go to http://localhost:8080/api/example
const apiRoutes = require("./routes/api/example");
const commentsRoutes = require("./routes/comments");

app.use("/api/example", apiRoutes);
app.use("/comments", commentsRoutes);

app.get("/", (req, res) => {
  res.send("Hey! How are you?");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
