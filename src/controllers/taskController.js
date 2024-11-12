const Task = require("../entities/task.js");

const create = async (task) => {
  const {description, checked} = task

  try {
    const task = await Task.create({
      description: description,
      checked: checked
    })
    return task
  } catch (error) {
    throw error
  }
}

const listTask = async () => {
  try {
    const list = await Task.findAll()
    
    return list
  } catch (error) {
    throw error
  }
}

const update = async () => {
}

const updateCheck = async () => {
}

const deleteTask = async () => {
  
}


module.exports = {create, listTask, }
