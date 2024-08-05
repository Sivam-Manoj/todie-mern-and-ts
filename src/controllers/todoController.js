const express = require("express");
const Todo = require("../models/todoModel");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addTodo = async (req, res) => {
  try {
    const body = req.body;

    const todo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo = await todo.save();
    const allTodos = await Todo.find();

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updateTodo = await Todo.findByIdAndUpdate(id, body, { new: true });
    const allTodos = await Todo.find();

    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    const allTodos = await Todo.find();

    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
