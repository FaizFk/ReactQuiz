import { Link } from "react-router";

const QuizList = ({ quizzes }) => (
  <div className="mt-6">
    <h3 className="text-2xl font-bold mb-4">Available Quizzes</h3>
    <div className="space-y-4">
      {quizzes.map((quiz, index) => (
        <div key={index} className="bg-white p-4 shadow rounded">
          <h4 className="text-xl font-semibold">{quiz.quizName}</h4>
          <Link
            to={`/play/${quiz._id}`}
            className="text-blue-500 hover:underline mt-2 block"
          >
            Start Quiz
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default QuizList;
