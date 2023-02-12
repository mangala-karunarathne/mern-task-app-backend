const { json } = require("express");
const Task = require("../models/taskModel");

// Create a Task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get or Read all Tasks(Data)
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTask = async (req, res) => {
  // console.log(req.params);
  // res.send("Get Single Task");
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.status(200).json(task);
    if (!task) {
      res.status(404).json(`No Task with id: ${id}`);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete a Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    res.status(200).send("Task Deleted");
    if (!task) {
      return res.status(404).json(`No Task with id: ${id}`);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update a Task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json(`No Task with id: ${id}`);
    }
    
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
