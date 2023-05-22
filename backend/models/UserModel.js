const mongoose = require("mongoose");
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
  refreshToken: [String],
});

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = { User, Todo };
