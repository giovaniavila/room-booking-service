const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fatec',
  database: 'roomservice',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL.');
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/cadastro', (req, res) => {
  const {
    name,
    local,
    data,
    horaInicial,
    horaFinal,
    responsavel,
    motivo,
    informacaoGeral,
    convidados,
    foto 
  } = req.body;

  let fotoValue = foto || null; 

  const sql = `
    INSERT INTO rooms (name, local, data, horaInicial, horaFinal, responsavel, motivo, informacaoGeral, convidados, foto)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  connection.query(sql, [name, local, data, horaInicial, horaFinal, responsavel, motivo, informacaoGeral, convidados, fotoValue], (err, results) => {
    if (err) {
      console.error('Erro ao inserir evento:', err);
      res.status(500).send('Erro ao inserir evento.');
    } else {
      res.status(201).send('Evento inserido com sucesso.');
    }
  });
});

app.get('/salas', (req, res) => {
  const sql = 'SELECT * FROM rooms';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      res.status(500).send('Erro ao buscar dados.');
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
