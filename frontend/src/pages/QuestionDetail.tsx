import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/client";
import { useAuth } from "../hooks/useAuth";

const QuestionDetail = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [question, setQuestion] = useState<any>(null);
  const [answers, setAnswers] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    api.get(`/questions/${id}`).then(setQuestion);
    api.get(`/answers/${id}`).then(setAnswers);
  }, [id]);

  const submitAnswer = async () => {
    await api.post(`/answers/${id}`, { body: text }, token);
    api.get(`/answers/${id}`).then(setAnswers);
    setText("");
  };

  if (!question) return <p>Loading...</p>;

  return (
    <>
      <h2>{question.title}</h2>
      <p>{question.body}</p>
      <hr />

      <h3>Answers</h3>
      {answers.map((a: any) => (
        <div key={a._id} className="answer">
          <p>{a.body}</p>
          <small>By: {a.author.name}</small>
        </div>
      ))}

      {token && (
        <div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Your answer..." />
          <button onClick={submitAnswer}>Submit Answer</button>
        </div>
      )}
    </>
  );
};

export default QuestionDetail;
