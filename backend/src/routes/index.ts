import { Router } from "express";
import authRoutes from "./authRoutes.js";
import questionRoutes from "./questionRoutes.js";
import answerRoutes from "./answerRoutes.js";

const router = Router();

router.use("/test", (_req, res) => res.send("API is working 🚀"));
router.use("/auth", authRoutes);
router.use("/questions", questionRoutes);
router.use("/answers", answerRoutes);

export default router;
