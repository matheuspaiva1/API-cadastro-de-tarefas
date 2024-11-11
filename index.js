// index.js
const sequelize = require('./config.js');
const Task = require('./src/entities/task.js');

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });
