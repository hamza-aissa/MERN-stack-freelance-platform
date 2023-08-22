const express = require("express");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();
const todoController = require("../controller/todoscontroller");
const AuthController = require("../controller/authcontroller");
const usercontroller = require("../controller/usercontroller");
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
router.get("/todos/user/:userId", authMiddleware, todoController.getuserTodos);
router.post(
  "/todos",
  authMiddleware,
  upload.single("file"),
  todoController.addTodo
);
router.delete("/todos/:id", authMiddleware, todoController.deleteTodoById);
router.put("/todos/:id", authMiddleware, todoController.updateTodoById);
router.post(
  "/users/:targetId/follow",
  authMiddleware,
  usercontroller.FollowUser
);
router.get(
  "/users/:userId/following/:targetId",
  authMiddleware,
  usercontroller.checkFollowState
);
// router.post("/users/:targetId/unfollow", authMiddleware, usercontroller.UnFollowUser)
router.post("/feed", authMiddleware, todoController.getUserFeed);
router.post("/users", authMiddleware, usercontroller.getallUsers);
router.get("/users/:searchTerm", authMiddleware, usercontroller.searchUsers);
router.get("/Todos/:searchTerm", authMiddleware, todoController.searchTodos);

// admin routes

module.exports = router;
