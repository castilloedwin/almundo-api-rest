const config = require('./config');
const express = require('express');
const api = require('./routes/api');
const cors = require('cors');
const app = express();

app.use(cors());

// Routes API
app.use('/api/v1', api);


app.listen(config.port, () => console.log('Servidor corriendo en el puerto ' + config.port));