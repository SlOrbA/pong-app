'usr strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.post('*', (req, res) =>  res.send('<html><head><title>Ping App</title></head><body><h1>Success!</h1><p>' + req.body + '</p></body></html>'));

app.listen(PORT, HOST);

console.log(`Now listening on http://${HOST}:${PORT}`);

