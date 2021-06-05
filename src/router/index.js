import express from 'express';
import { createToDoRouter, getToDosRouter, putToDosRouter } from './todo';

const router = express.Router();

router.post('/', createToDoRouter);
router.get('/', getToDosRouter);
router.put('/:id', putToDosRouter);

module.exports = router