//app.js

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
    res.render('signup');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.use('/', employersRouter);

app.get('/info', (req, res) => {
    res.render('info');
}); 


app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    res.redirect('index');
}); 

app.listen(3000, () => {
    console.log('Servidor conectado en http://localhost:3000');
});
