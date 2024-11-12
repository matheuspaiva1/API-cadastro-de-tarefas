const express = require('express');
const sequelize = require('./config'); 
const Task = require('./src/entities/task');
const router = require('./src/routes/taskRoutes');

const app = express();

app.use(express.json()); 

app.use('/api', router);

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((error) => console.error('Erro ao sincronizar o banco de dados:', error));
