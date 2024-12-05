const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// API Routes
const quizRouter = require("./routes/quiz");
app.use("/api/quizzes", quizRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
