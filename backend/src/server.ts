import express from "express";
import dotenv from "dotenv";
dotenv.config();

import router from "./routes/index.js";   // <-- THIS MUST EXIST
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());

connectDB();

// Mount routes
app.use("/api", router);

app.get("/", (req, res) => res.send("Backend running"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
