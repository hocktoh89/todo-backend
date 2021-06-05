import express from 'express';
import { createToDoRouter, getToDosRouter, putToDosRouter, deleteToDoRouter } from './todo';

const router = express.Router();

router.post('/', createToDoRouter);
router.get('/', getToDosRouter);
router.put('/:id', putToDosRouter);
router.delete('/:id', deleteToDoRouter);

module.exports = router