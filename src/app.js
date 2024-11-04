const express = require('express');
const bodyParser = require('body-parser');
const { playerRoutes } = require('./routes');
// const { loggin } = require('./middleware');
// const { player } = require('./models');
const { initializeDb } = require('./config/dbConfig');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use('/players', playerRoutes);
app.use(express.json());
(async () => {
    initializeDb();
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
})();

// app.get('/', (req, res) => {
//     res.send('Servidor funcionando correctamente');
// });  

