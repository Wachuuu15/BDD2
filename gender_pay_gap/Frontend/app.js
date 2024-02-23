const express = require('express');
const app = express();
const db = require('./db');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use(express.static('public'))

const employer = require('./routes/employers')
app.use(employer)

app.listen(3000, () => {
    console.log('Server connect en http://localhost:3000')
})
