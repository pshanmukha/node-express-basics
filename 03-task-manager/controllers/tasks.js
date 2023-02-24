const Task = require('../models/Task')

const getAllTasks = (req, res)=>{
    res.send('Get all tasks')
}
const getSingleTasks = (req, res)=>{
    res.send('Get single task')
}
const createTask = async (req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const updateTask = (req, res)=>{
    res.send('Update task')
}
const deleteTask = (req, res)=>{
    res.send('Delete task')
}

module.exports = {getAllTasks,getSingleTasks,createTask,updateTask,deleteTask}