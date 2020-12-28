const express = require('express');
const port = 3000
const app = express();

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'app'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const create = "";
const query = "";

connection.query(query);
connection.end();

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
})