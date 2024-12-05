import { useState } from "react";

const QuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddQuestion({ question, options, correct });
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrect(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-bold">Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <h2 className="font-bold">Options:</h2>
        {options.map((opt, idx) => (
          <div key={idx} className="flex items-center space-x-2 mt-2">
            <input
              type="text"
              value={opt}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[idx] = e.target.value;
                setOptions(newOptions);
              }}
              className="w-full p-2 border rounded"
            />
            <input
              type="radio"
              name="correct"
              checked={correct === idx}
              onChange={() => setCorrect(idx)}
            />
          </div>
        ))}
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Question
      </button>
    </form>
  );
};

export default QuestionForm;
