const createToDo = require('../src/controller/ToDo/create');
const db = require('../src/db')

beforeAll(async () => await db.connect())

describe('Test ToDo', () => {

    it('Add New ToDo record to the DB', async () => {
        const { toDoId, text } = await createToDo('See Doctor');

        expect(toDoId).toHaveReturned();
        expect(text).toBe('See Doctor');
    })
})