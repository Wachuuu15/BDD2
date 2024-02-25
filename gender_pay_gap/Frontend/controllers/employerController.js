const path = require('path');
const Employer = require('../model/employer');

const mostrar = async (req, res) => {
    try {
        await Employer.init();
        console.log('Iniciando consulta de empleadores...');

        const limitPerPage = 1;
        const page = parseInt(req.query.page) || 1;
        const startIndex = (page - 1) * limitPerPage;

        const employers = await Employer.find({})
                                        .skip(startIndex)
                                        .limit(limitPerPage)
                                        .exec();
        
        
        console.log('Consulta finalizada. Empleadores encontrados:', employers);

        if (employers === null || employers.length === 0) {
            res.status(404).json({ message: 'No se encontraron empleadores' });
        } else {
            const infoPath = path.join(__dirname, '../views/info.ejs');
            res.render(infoPath, { employers: employers });
        }
    } catch (error) {
        console.error('Error al obtener los empleadores:', error);
        res.status(500).json({ message: 'Error al obtener los empleadores' });
    }
};

module.exports = { mostrar };
