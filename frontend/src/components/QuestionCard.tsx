import { Link } from "react-router-dom";

const QuestionCard = ({ question }: any) => {
  return (
    <Link to={`/questions/${question._id}`} className="card">
      <h3>{question.title}</h3>
      <p>{question.body.slice(0, 150)}...</p>
      <small>Answers: {question.answersCount} | Upvotes: {question.upvotes}</small>
    </Link>
  );
};

export default QuestionCard;
