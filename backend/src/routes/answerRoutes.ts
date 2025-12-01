import { Router } from "express";
import { protect } from "../middleware/auth.js";
import {
  createAnswer,
  getAnswersForQuestion
} from "../controllers/answerController.js";

const router = Router();

router.get("/:questionId", getAnswersForQuestion);
router.post("/:questionId", protect, createAnswer);

export default router;
