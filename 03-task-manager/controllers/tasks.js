const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async")
const {createCustomError} = require('../errors/custom-error')
// Get
// to get all the tasks
const getAllTasks = asyncWrapper (async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
})

// Get
// to get single task by referencing the id
const getSingleTasks = asyncWrapper (async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task found with id : ${taskID}`, 404))
    }
    res.status(200).json({ task });
})

//Post 
//to create task
const createTask = asyncWrapper (async (req, res) => {
    const task = await Task.create(req.body);
    //The HTTP 201 Created success status response code indicates 
    //that the request has succeeded and has led to the creation of a resource
    res.status(201).json({ task });
})

// Patch
// to update single task by referencing the id
const updateTask = asyncWrapper (async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true, //we want the updated value to return
      runValidators: true, //we want to run the validators that we setup in models
    });
    if (!task) {
      return next(createCustomError(`No task found with id : ${taskID}`, 404))
    }
    res.status(200).json({ task });
})

// Delete
// to delete the task by referencing the id
const deleteTask = asyncWrapper (async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task found with id : ${taskID}`, 404))
    }
    res.status(200).json({ task: null });
})

module.exports = {
  getAllTasks,
  getSingleTasks,
  createTask,
  updateTask,
  deleteTask,
};
