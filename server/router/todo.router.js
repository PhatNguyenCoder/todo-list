const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();

router.get("/todo", todoController.getTodoTask);
router.post("/todo", todoController.addTodoTask);
router.delete("/todo/:id", todoController.deleteTodoTask);
router.put("/todo/:id", todoController.updateTodoTask);
router.put("/todo/:id", todoController.updateTodoStatus);

module.exports = router;
