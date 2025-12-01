import { useState } from "react";
import { api } from "../api/client";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AskQuestion = () => {
  const [question, setQuestion] = useState({ title: "", body: "", subject: "" });
  const { token } = useAuth();
  const navigate = useNavigate();

  const submit = async () => {
    await api.post("/questions", question, token);
    navigate("/");
  };

  return (
    <div className="form">
      <h2>Ask a Question</h2>
      <input placeholder="Title" onChange={(e) => setQuestion({ ...question, title: e.target.value })} />
      <textarea placeholder="Details..." onChange={(e) => setQuestion({ ...question, body: e.target.value })} />
      <input placeholder="Subject" onChange={(e) => setQuestion({ ...question, subject: e.target.value })} />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default AskQuestion;
