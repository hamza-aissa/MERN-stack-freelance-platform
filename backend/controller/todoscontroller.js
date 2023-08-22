const { Todo, User } = require("../models/UserModel");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// search todos
const searchTodos = async (req, res) => {
  console.log("search todos called");
  const { searchTerm } = req.params;
  console.log(searchTerm);
  try {
    const result = await Todo.find({
      description: { $regex: searchTerm, $options: "i" },
    });
    console.log(result);
    res.status(200).json(result || []);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};
// Get all user todos

const getuserTodos = async (req, res) => {
  const { userId } = req.params;
  try {
    const todos = await Todo.find({ user: userId });
    console.log("todos from     ", userId, "   ", todos);
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// Get all todos from authenticated user
const getAllTodos = async (req, res) => {
  try {
    // const todos = await Todo.findById({ user: req.user._id });
    const todos = await Todo.find({ userId: req.user._id });
    // console.log("todos from     ", req.user, "   ", todos);
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new todo
const addTodo = async (req, res) => {
  try {
    const file = req.file;
    const fileData = {
      data: Buffer.from(file.buffer),
      contentType: file.mimetype,
      filename: file.originalname,
    };
    const newTodo = new Todo({
      description: req.body.description,
      userId: req.user._id,
      user: req.email,
      files: [fileData],
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", err });
  }
};

// Update a todo by id
const updateTodoById = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
        user: req.user._id,
      },
      { new: true }
    );
    res.status(200).json(updatedTodo);
    console.log(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a todo by id
const deleteTodoById = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Todo ${deletedTodo.title} deleted` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// mark todo done
const markTodoDone = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// get user feed of todos
const getUserFeed = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const followingsArr = user.Following;
    const feedArray = followingsArr.map((todo) => todo._id);
    const feedTodos = await Todo.find({ _id: { $in: feedArray } });
    res.status(200).json(feedTodos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// enlist to a todo
const enlistTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.enlisted.push(req.user._id);
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// accept enlistement
const acceptEnlist = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.enlisters.push(req.user._id);
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// decline enlistement
const declineEnlist = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.enlisted.push(req.user._id);
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// check if job done

// add reaction
const addReaction = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.reactions.push({ user: req.user._id, type: req.body.type });
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getuserTodos,
  getAllTodos,
  addTodo,
  updateTodoById,
  deleteTodoById,
  addReaction,
  acceptEnlist,
  declineEnlist,
  enlistTodo,
  markTodoDone,
  getUserFeed,
  searchTodos,
};
