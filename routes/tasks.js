const express = require('express');
const router = express.Router();

// what is router

const { getAllTasks, updateTask, getTask, deleteTask, createTask } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router