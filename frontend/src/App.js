import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import HomePage from "./pages/HomePage";
import AddQuestionsPage from "./pages/AddQuestionsPage";
import PlayQuizPage from "./pages/PlayQuizPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">React Quiz App</h1>
          <div>
            <Link to="/" className="px-4">Home</Link>
            <Link to="/add" className="px-4">Add Quiz</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddQuestionsPage />} />
        <Route path="/play/:quizId" element={<PlayQuizPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
