// server.js (Backend - Node.js + Express)
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

let records = []; // Um array para armazenar os registros

// Rota para buscar todos os registros
app.get('/api/records', (req, res) => {
  res.json(records);
});

// Rota para adicionar um novo registro
app.post('/api/records', (req, res) => {
  const newRecord = req.body;
  records.push(newRecord);
  res.json(newRecord);
});

// Rota para excluir um registro
app.delete('/api/records/:index', (req, res) => {
  const index = req.params.index;
  records.splice(index, 1);
  res.sendStatus(200); // Retorna sucesso
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
