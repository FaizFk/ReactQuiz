import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import QuizCard from "../components/QuizCard";
import QuizResults from "../components/QuizResults";

const PlayQuizPage = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/quizzes/${quizId}`);
        setQuiz(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (current < quiz.questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      {showResults ? (
        <QuizResults score={score} total={quiz.questions.length} />
      ) : (
        <QuizCard
          question={quiz.questions[current]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default PlayQuizPage;
