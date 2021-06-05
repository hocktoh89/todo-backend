import express from 'express';
import { deleteAllToDoRouter } from './todo';

const router = express.Router();

router.delete('/todos', deleteAllToDoRouter);

module.exports = router