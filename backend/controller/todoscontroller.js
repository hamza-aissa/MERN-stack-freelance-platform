const { Todo } = require("../models/UserModel");
const mongoose = require("mongoose");

// Get all todos
const getAllTodos = async (req, res) => {
  try {
    // const todos = await Todo.findById({ user: req.user._id });
    const todos = await Todo.find({ userId: req.user._id });
    console.log("todos from     ", req.user, "   ", todos);
    res.status(200).json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new todo
const addTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      description: req.body.description,
      userId: req.user._id,
      user: req.email,
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

module.exports = {
  getAllTodos,
  addTodo,
  updateTodoById,
  deleteTodoById,
};
