const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua senha',
  database: 'CentralMedicamentos',
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para cadastrar clientes
app.post('/api/cadastrar_cliente', (req, res) => {
  const { nome, email, senha } = req.body;
  const sql = 'INSERT INTO Clientes (nome, email, senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) throw err;
    res.send('Cliente cadastrado com sucesso!');
  });
});

// Rota para cadastrar medicamentos
app.post('/api/cadastrar_medicamento', (req, res) => {
  const { nome, quantidade, status } = req.body;
  const sql = 'INSERT INTO Medicamentos (nome, quantidade, status) VALUES (?, ?, ?)';
  db.query(sql, [nome, quantidade, status], (err, result) => {
    if (err) throw err;
    res.send('Medicamento cadastrado com sucesso!');
  });
});

// Rota para buscar medicamentos
app.get('/api/medicamentos', (req, res) => {
  const sql = 'SELECT * FROM Medicamentos';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${3000}`);
});
