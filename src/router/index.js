import express from 'express';
import { createToDoRouter} from './todo';

const router = express.Router();

router.post('/', createToDoRouter);

module.exports = router