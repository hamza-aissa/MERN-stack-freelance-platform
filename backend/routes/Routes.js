const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoscontroller");
const AuthController = require("../controller/authcontroller");
const authMiddleware = require("../middleware/checkTokens");
const refreshTokenController = require("../controller/refreshtoken");

// Public routes
router.post("/register", AuthController.registeruser);
router.post("/login", AuthController.loginuser);
// Private routes
router.get(
  "/refresh",
  authMiddleware,
  refreshTokenController.handleRefreshToken
);
router.get("/todos", authMiddleware, todoController.getAllTodos);
router.post("/todos", authMiddleware, todoController.addTodo);
router.delete("/todos/:id", authMiddleware, todoController.deleteTodoById);
router.put("/todos/:id", authMiddleware, todoController.updateTodoById);
// admin routes

module.exports = router;
