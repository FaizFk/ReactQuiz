const QuizResults = ({ score, total }) => (
    <div className="text-center">
      <h3 className="text-2xl font-bold">Quiz Completed!</h3>
      <p className="mt-4">Your Score: {score} / {total}</p>
    </div>
  );
  
  export default QuizResults;
  