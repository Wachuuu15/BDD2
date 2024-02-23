const mongoose = require('mongoose');
const uri = 'mongodb+srv://wachu2:1234@cluster0.veeqce2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión establecida con MongoDB Atlas'))
    .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

module.exports = mongoose.connection;
