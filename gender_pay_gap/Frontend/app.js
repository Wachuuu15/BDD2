// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const employersRouter = require('./routes/employers');

// cors
app.use(cors());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', employersRouter);

app.get('/info', (req, res) => {
    res.render('info');
});


app.listen(3000, () => {
    console.log('Servidor conectado en http://localhost:3000');
});

