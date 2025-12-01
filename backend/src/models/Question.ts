import mongoose, { Document, Schema } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  body: string;
  subject: string;
  tags: string[];
  author: mongoose.Types.ObjectId;
  answersCount: number;
  upvotes: number;
}

const questionSchema = new Schema<IQuestion>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    subject: { type: String, required: true },
    tags: [{ type: String }],
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    answersCount: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Question = mongoose.model<IQuestion>("Question", questionSchema);
