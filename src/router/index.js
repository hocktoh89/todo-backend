const express = require('express');
const createToDoRouter = require('./todo');
const router = express.Router();

router.post('/', createToDoRouter);

module.exports = router