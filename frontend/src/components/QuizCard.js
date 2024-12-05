const QuizCard = ({ question, onAnswer }) => (
    <div className="bg-white p-6 shadow-md rounded">
      <h3 className="text-xl font-bold mb-4">{question.question}</h3>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(index === question.correct)}
          className="block w-full bg-gray-200 p-2 rounded mt-2"
        >
          {option}
        </button>
      ))}
    </div>
  );
  
  export default QuizCard;
  