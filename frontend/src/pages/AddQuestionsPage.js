import { useState } from "react";
import { useNavigate } from "react-router";
import QuestionForm from "../components/QuestionForm";
import axios from "axios";

const AddQuestionsPage = () => {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleSubmit = async () => {
    if (quizName && questions.length > 0) {
      const newQuiz = { quizName, questions };

      try {
        // Send the quiz data to the backend
        const response = await axios.post("http://localhost:5000/api/quizzes", newQuiz);
        console.log("Quiz created:", response.data);

        // Reset the form and navigate to the homepage
        setQuizName("");
        setQuestions([]);
        navigate("/"); // Redirect to the homepage
      } catch (error) {
        console.error("Error creating quiz:", error);
      }
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Quiz</h2>
      <div className="mb-6">
        <label className="block text-xl font-semibold">Quiz Name:</label>
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <QuestionForm onAddQuestion={addQuestion} />
      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Quiz
      </button>
    </div>
  );
};

export default AddQuestionsPage;
