const Task = require('../models/task');

const getAllTasks = (req, res) => {
    res.send('This is all i get from this');
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

// no voice

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}
const updateTask = (req, res) => {
    res.send('update Task');
}
const deleteTask = (req, res) => {
    res.send('delete Task');
}

module.exports = {
    getAllTasks, getTask, updateTask, deleteTask, createTask
}
