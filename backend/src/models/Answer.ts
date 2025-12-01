import mongoose, { Document, Schema } from "mongoose";

export interface IAnswer extends Document {
  body: string;
  author: mongoose.Types.ObjectId;
  question: mongoose.Types.ObjectId;
  upvotes: number;
  isAccepted: boolean;
}

const answerSchema = new Schema<IAnswer>(
  {
    body: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    upvotes: { type: Number, default: 0 },
    isAccepted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Answer = mongoose.model<IAnswer>("Answer", answerSchema);
