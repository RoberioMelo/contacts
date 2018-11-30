const express = require('express');
const router = express.Router();

// Modelo de Tasks
const Task = require('../models/task');

// todas as Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// todas as Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// ADICIONAR uma nova task
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({title, description});
  await task.save();
  res.json({status: 'Salvo'});
});

// Atualiza uma nova task
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTask = {title, description};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Atualizado'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Deletado'});
});

module.exports = router;
