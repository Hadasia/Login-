// server/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Para permitir a leitura de JSON no corpo das requisições

let records = []; // Aqui vamos armazenar os registros temporariamente (em memória)

// Rota para obter todos os registros
app.get('/api/records', (req, res) => {
  res.json(records);
});

// Rota para adicionar um novo registro
app.post('/api/records', (req, res) => {
  const newRecord = req.body;
  records.push(newRecord);
  res.status(201).json(newRecord);
});

// Rota para editar um registro
app.put('/api/records/:id', (req, res) => {
  const { id } = req.params;
  const updatedRecord = req.body;
  records = records.map((record, index) => (index === parseInt(id) ? updatedRecord : record));
  res.json(updatedRecord);
});

// Rota para excluir um registro
app.delete('/api/records/:id', (req, res) => {
  const { id } = req.params;
  records = records.filter((_, index) => index !== parseInt(id));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
