const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3000;

const appName = process.env.APP_NAME

app.use('/', (req, res) => {
    console.log(`Request served by ${appName}`);
    console.log("Esta sirviendo la ruta /");
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});
