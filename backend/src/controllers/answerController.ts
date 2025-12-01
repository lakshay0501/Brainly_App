import type { Response } from "express";
import { Answer } from "../models/Answer.js";
import { Question } from "../models/Question.js";
import type { AuthRequest } from "../middleware/auth.js";

export const createAnswer = async (req: AuthRequest, res: Response) => {
  try {
    const { body } = req.body;
    const { questionId } = req.params;

    const answer = await Answer.create({
      body,
      author: req.user!.id,
      question: questionId
    });

    await Question.findByIdAndUpdate(questionId, { $inc: { answersCount: 1 } });

    res.status(201).json(answer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAnswersForQuestion = async (req: AuthRequest, res: Response) => {
  try {
    const { questionId } = req.params;
    const answers = await Answer.find({ question: questionId })
      .populate("author", "name")
      .sort({ upvotes: -1, createdAt: 1 });

    res.json(answers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
