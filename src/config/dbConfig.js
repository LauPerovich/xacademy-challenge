const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
});

const initializeDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida');
        const { Player } = require('../models');
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error("Error al inicializar la base de datos:", error);
    }
}

module.exports = { sequelize, initializeDb };