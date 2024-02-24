const mongoose = require('mongoose');
const uri = 'mongodb+srv://wachu2:1234@cluster0.veeqce2.mongodb.net/gender_data'
//'mongodb+srv://wachu2:1234@cluster0.veeqce2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//mongodb+srv://wachu2:1234@cluster0.veeqce2.mongodb.net/gender_data

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {   
        console.log('Conexión establecida con MongoDB Atlas');
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB Atlas:', err);
    });

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Conexión establecida con éxito');
});

connection.on('error', (err) => {
    console.error('Error en la conexión:', err);
});

connection.on('disconnected', () => {
    console.log('Conexión a MongoDB desconectada');
});

module.exports = connection;
