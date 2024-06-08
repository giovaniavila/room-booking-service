const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(fileUpload());

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
    convidados
  } = req.body;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }

  const foto = req.files.foto;
  const uploadPath = path.join(__dirname, 'uploads', foto.name);

  foto.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    const fotoPath = `/uploads/${foto.name}`;
    const sql = `
      INSERT INTO rooms (name, foto, local, data, horaInicial, horaFinal, responsavel, motivo, informacaoGeral, convidados)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [name, fotoPath, local, data, horaInicial, horaFinal, responsavel, motivo, informacaoGeral, convidados], (err, results) => {
      if (err) {
        console.error('Erro ao inserir evento:', err);
        res.status(500).send('Erro ao inserir evento.');
      } else {
        res.status(201).send('Evento inserido com sucesso.');
      }
    });
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

// Servir imagens estáticas
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
