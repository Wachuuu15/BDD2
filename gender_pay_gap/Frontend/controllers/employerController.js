const Employer = require('../model/employer');


const mostrar = async (req, res) => {
    try {
        await Employer.init()
        console.log('Iniciando consulta de empleadores...');
        const employers = await Employer.find({}).exec();
        
        console.log('Consulta finalizada. Empleadores encontrados:', employers);

        if (employers === null) {
            res.status(404).json({ message: 'No se encontraron empleadores' });
        } else {
            res.json(employers);
        }
    } catch (error) {
        console.error('Error al obtener los empleadores:', error);
        res.status(500).json({ message: 'Error al obtener los empleadores' });
    }
};

module.exports = { mostrar };
