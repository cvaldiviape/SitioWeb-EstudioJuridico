/* -------- */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 3002;

// rutas
const routes = require('./routes/index.routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(port, hostname,() => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
})