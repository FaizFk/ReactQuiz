const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correct: Number,
});

const QuizSchema = new mongoose.Schema({
  quizName: String,
  questions: [QuestionSchema],
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
