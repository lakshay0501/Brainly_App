import { Router } from "express";
import { protect } from "../middleware/auth.js";
import {
  createQuestion,
  getQuestions,
  getQuestionById
} from "../controllers/questionController.js";

const router = Router();

router.get("/", getQuestions);
router.get("/:id", getQuestionById);
router.post("/", protect, createQuestion);

export default router;
