const createToDoController = require('../src/controller/todo');

const db = require('../src/db');

beforeAll(async () => await db.connect());

afterAll(async () => await db.closeDatabase());

describe('Test ToDo Controller', () => {

    describe('Test Creation', () => {
        test('Insert ToDo to DB', async () => {
            const { toDoId, text } = await createToDoController.createToDo('See Doctor');

            expect(toDoId).toBeTruthy();
            expect(text).toBe('See Doctor');
        })

        test('Throw Exception on Add Same Record Found', async () => {
            try {
                await createToDoController.createToDo('See Doctor')
            } catch (err) {
                expect(err.message).toBe('To do - See Doctor - exist');
            }

        })
    });


})