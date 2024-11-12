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

module.exports = {create}
