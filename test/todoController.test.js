const createToDoController = require('../src/controller/todo');

const db = require('../src/db');

beforeAll(async () => await db.connect());

afterAll(async () => await db.closeDatabase());

describe('Test ToDo Controller', () => {

    describe('Test Creation', () => {
        afterAll(async () => await db.clearDatabase());

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

    describe('Test Get All', () => {

        afterEach(async () => await db.clearDatabase())

        test('Get all ToDos', async () => {

            await createToDoController.createToDo('See Doctor 1');
            await createToDoController.createToDo('See Doctor 2');
            await createToDoController.createToDo('See Doctor 3');

            const toDos = await createToDoController.getToDos();

            expect(toDos[0].text).toBe('See Doctor 1');
            expect(toDos[1].text).toBe('See Doctor 2');
            expect(toDos[2].text).toBe('See Doctor 3');
        })

        test('Get empty array when no records', async () => {
            const toDos = await createToDoController.getToDos();
            expect(toDos).toEqual([]);
        })

        test('Throw exception on error found', async () => {

            createToDoController.getToDos = jest.fn().mockImplementation(() => {
                throw new Error("UNKNOWN ERROR");
              });

            try {
                await createToDoController.getToDos();
            } catch (err) {
                expect(createToDoController.getToDos).toThrow(Error);
                expect(createToDoController.getToDos).toThrow("UNKNOWN ERROR");
            }

        })
    });

})