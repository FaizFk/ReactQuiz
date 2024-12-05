import { useEffect, useState } from "react";
import axios from "axios";
import QuizList from "../components/QuizList";

const HomePage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quizzes");
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="container mx-auto py-10 text-center">
      <h2 className="text-3xl font-bold">Welcome to the React Quiz App!</h2>
      <p className="mt-4 text-gray-600">Choose a quiz to play or add your own.</p>

      {quizzes.length === 0 ? (
        <p className="mt-4 text-lg">No quizzes available. Please add a quiz.</p>
      ) : (
        <QuizList quizzes={quizzes} />
      )}
    </div>
  );
};

export default HomePage;
