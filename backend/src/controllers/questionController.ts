import type { Response } from "express";
import { Question } from "../models/Question.js";
import type { AuthRequest } from "../middleware/auth.js";

export const createQuestion = async (req: AuthRequest, res: Response) => {
  try {
    const { title, body, subject, tags } = req.body;
    const author = req.user!.id;

    const question = await Question.create({
      title,
      body,
      subject,
      tags,
      author
    });

    res.status(201).json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getQuestions = async (req: AuthRequest, res: Response) => {
  try {
    const { search, subject } = req.query;

    const query: any = {};
    if (subject) query.subject = subject;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { body: { $regex: search, $options: "i" } }
      ];
    }

    const questions = await Question.find(query)
      .populate("author", "name")
      .sort({ createdAt: -1 });

    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getQuestionById = async (req: AuthRequest, res: Response) => {
  try {
    const question = await Question.findById(req.params.id).populate("author", "name");
    if (!question) return res.status(404).json({ message: "Question not found" });
    res.json(question);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
