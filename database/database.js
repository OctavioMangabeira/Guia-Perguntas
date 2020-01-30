const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'newroot', 'octavio123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;