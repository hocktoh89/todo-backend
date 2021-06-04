import express from 'express';
import { createToDoRouter, getToDosRouter } from './todo';

const router = express.Router();

router.post('/', createToDoRouter);
router.get('/', getToDosRouter);

module.exports = router