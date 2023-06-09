import Questions from "../models/Questions.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const postQuestion = new Questions({
    ...postQuestionData,
    userId: req.userId,
  });
  try {
    await postQuestion.save();
    res.status(200).json("Posted a question successfully");
  } catch (error) {
    console.log(error.message);
    res.status(409).json("couldnt post a new question");
  }
};
