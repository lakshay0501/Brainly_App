import { useEffect, useState } from "react";
import { api } from "../api/client";
import QuestionCard from "../components/QuestionCard";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    api.get("/questions").then(setQuestions);
  }, []);

  return (
    <div>
      <h2>Recent Questions</h2>
      {questions.map((q: any) => (
        <QuestionCard key={q._id} question={q} />
      ))}
    </div>
  );
};

export default Home;
