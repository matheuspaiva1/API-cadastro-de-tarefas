const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('to-do','postgres','paiva0007', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize;