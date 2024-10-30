const express = require('express');
const sequelize = require('./config/dbConfig');

const app = express();
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => console.log('Conectado a MySQL exitosamente'))
    .catch(err => console.error('Error al conectar a MySQL: ', err));

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});