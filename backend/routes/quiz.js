const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();

// Get all quizzes
router.get("/", async (req, res) => {
    try {
      const quizzes = await Quiz.find(); // Fetch all quizzes from the database
      res.json(quizzes); // Return the quizzes in the response
    } catch (err) {
      res.status(400).send("Error fetching quizzes");
    }
  });

// Get quiz by ID
router.get("/:id", async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      if (!quiz) {
        return res.status(404).json({ message: "Quiz not found" });
      }
      res.json(quiz);
    } catch (err) {
      res.status(400).send("Error fetching quiz");
    }
  });
  

// POST a new quiz
router.post("/", async (req, res) => {
  const { quizName, questions } = req.body;
  const newQuiz = new Quiz({ quizName, questions });

  try {
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).send("Error creating quiz");
  }
});

module.exports = router;
