import dotenv from 'dotenv';
dotenv.config({path: '../env.test'});

const createToDo = require('../src/controller/ToDo/create');

const db = require('../src/db');

beforeAll(async () => await db.connect());

afterAll(async () => await db.closeDatabase());

describe('Test ToDo Controller', () => {

    test('Insert ToDo to DB', async () => {
        const { toDoId, text } = await createToDo('See Doctor');

        expect(toDoId).toBeTruthy();
        expect(text).toBe('See Doctor');
    })

    test('Throw Exception on Add Same Record Found', async () => {
        try {
            await createToDo('See Doctor')
        } catch (err) {
            expect(err.message).toBe('To do - See Doctor - exist');
        }

    })
})