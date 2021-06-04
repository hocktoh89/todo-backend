const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
db.connect();

const toDoRouter = require('./router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/todos', toDoRouter);

const port = 3000 || process.env.port

app.listen(port, () => {
    console.log("Listening on port ", port);
})