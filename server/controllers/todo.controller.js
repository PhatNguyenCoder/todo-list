const Todo = require("../models/todo.model");

exports.getTodoTask = async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addTodoTask = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteTodoTask = async (req, res) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo delete successfully", deleteTodo });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTodoTask = async (req, res) => {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Todo updated successfully", updateTodo });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTodoStatus = async (req, res) => {
  try {
    const { isCompleted } = req.body;
    const updateTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { isCompleted },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Todo status updated successfully", updateTodo });
  } catch (error) {
    res.status(500).send(error);
  }
};
