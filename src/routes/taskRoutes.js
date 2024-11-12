const express = require('express');
const Task = require('../entities/task');
const { update, updateCheck } = require('../controllers/taskController');

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

router.patch('/task/:id', async (req, res) => {
  try {
    const taskUpdate = await update(req.params.id, req.body)
    res.status(200).json(taskUpdate)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.patch('/task/:id/checked', async (req, res) => {
  try {
    const taskUpdateStatus = await updateCheck(req.params.id)
    res.status(200).json(taskUpdateStatus)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete('/task/:id', async (req, res) => {
  try {
    const taskDelete = await Task.destroy({where: {id: req.params.id}})

    if (taskDelete) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }  
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

module.exports = router