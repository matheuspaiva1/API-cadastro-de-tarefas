const express = require('express');
const Task = require('../entities/task');

const router = express.Router();

router.post('/task', async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (error) {
    res.status(400).json({ error: error })
  }
})

router.get('/task', async (req, res) => {
  try {
    const task = await Task.findAll()
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.patch('/task:id', async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (error) {
    res.status(400).json({ error: error })
  }
})

router.delete('/task:id', async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (error) {
    res.status(400).json({ error: error })
  }
})

module.exports = router