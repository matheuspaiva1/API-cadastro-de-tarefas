const { DataTypes } = require("sequelize");
const sequelize = require("../../config");

const Task = sequelize.define('User', {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  description:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  checked:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }, 
}, {
  tableName: "task"
})

module.exports = Task