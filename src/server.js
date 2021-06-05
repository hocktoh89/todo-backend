const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
db.connect();

const toDoRouter = require('./router');
const toDoBulkRouter = require('./router/bulkRouter');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/todos', toDoRouter);
app.use('/delete_all', toDoBulkRouter);

const port = 3000 || process.env.port

app.listen(port, () => {
    console.log("Listening on port ", port);
})