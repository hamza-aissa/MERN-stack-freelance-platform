const mongoose = require("mongoose");
const notificationShcema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  user: {
    type: String,
  },
  enlisters: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  reactions: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      type: {
        type: String,
        enum: ["like", "love", "haha", "wow", "sad", "angry"],
      },
    },
  ],
  files: [
    {
      data: Buffer,
      contentType: String,
      filename: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  Followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  refreshToken: [String],
});

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = { User, Todo };
