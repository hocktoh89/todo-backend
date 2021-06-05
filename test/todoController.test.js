const ToDoController = require('../src/controller/todo');

const db = require('../src/db');

beforeAll(async () => await db.connect());

afterAll(async () => await db.closeDatabase());

describe('Test ToDo Controller', () => {

    describe('Test Creation', () => {
        afterAll(async () => await db.clearDatabase());

        test('Insert ToDo to DB', async () => {
            const { toDoId, text } = await ToDoController.createToDo('See Doctor');

            expect(toDoId).toBeTruthy();
            expect(text).toBe('See Doctor');
        })

        test('Throw Exception on Add Same Record Found', async () => {
            try {
                await ToDoController.createToDo('See Doctor')
            } catch (err) {
                expect(err.message).toBe('To do - See Doctor - exist');
            }

        })
    });

    describe('Test Get All', () => {

        afterEach(async () => await db.clearDatabase())

        test('Get all ToDos', async () => {

            await ToDoController.createToDo('See Doctor 1');
            await ToDoController.createToDo('See Doctor 2');
            await ToDoController.createToDo('See Doctor 3');

            const toDos = await ToDoController.getToDos();

            expect(toDos[0].text).toBe('See Doctor 1');
            expect(toDos[1].text).toBe('See Doctor 2');
            expect(toDos[2].text).toBe('See Doctor 3');
        })

        test('Get empty array when no records', async () => {
            const toDos = await ToDoController.getToDos();
            expect(toDos).toEqual([]);
        })

        test('Throw exception on error found', async () => {

            ToDoController.getToDos = jest.fn().mockImplementation(() => {
                throw new Error("UNKNOWN ERROR");
              });

            try {
                await ToDoController.getToDos();
            } catch (err) {
                expect(ToDoController.getToDos).toThrow(Error);
                expect(ToDoController.getToDos).toThrow("UNKNOWN ERROR");
            }

        })
    });

    describe('Test Update', () => {

        afterEach(async () => await db.clearDatabase())

        test('Update ToDo by id', async () => {
            const updateData = {
                text: 'Learn guitar'
            };

            const result = await ToDoController.createToDo('See Doctor 1');
            const { toDoId } = result;

            const updatedToDo = await ToDoController.updateToDo(toDoId, updateData);

            expect(updatedToDo.text).toBe('Learn guitar');
        })

        test('Throw exception on update unknown id', async () => {

            const updateData = {
                text: 'Learn piano'
            };

            try {
                const updatedToDo = await ToDoController.updateToDo('ed156cf1f46b6fc0402c082c', updateData);
            } catch (err) {
                expect(err.message).toBe(`No data updated, id doesn't exist`);
            }

        })
    });
})