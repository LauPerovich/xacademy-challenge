const express = require('express');
const bodyParser = require('body-parser');
const { playerRoutes } = require('./routes');
const cors = require('cors');
const { initializeDb } = require('./config/dbConfig');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/players/', playerRoutes);

(async () => {
    initializeDb();
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
})();


