import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// Placeholder component to avoid missing module; replace with actual page component when available
const QuestionDetail = () => {
  return <div>Question detail page (placeholder)</div>;
};
import AskQuestion from "./pages/AskQuestion";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
          <Route path="/ask" element={<AskQuestion />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
