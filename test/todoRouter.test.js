
import * as ToDoRouter from '../src/router/todo';
import * as ToDoController from '../src/controller/todo';

describe("Test ToDo Router", () => {

    describe("POST ToDo", () => {

      test("test succesful response with 201", async () => {

        const expectedResult = {
            toDoId: "123",
            text: "Doctor"
        }

        const req = {}
        const res = {
            json: jest.fn().mockImplementation((result) => result),
            status: jest.fn(() => res)
        }

        ToDoController.createToDo = jest.fn().mockReturnValue(expectedResult);

        await ToDoRouter.createToDoRouter(req, res);
        
        expect(res.status).toBeCalledWith(201);
        expect(res.json).toHaveReturnedWith({data: expectedResult});
      });     

    });

    describe("GET ToDos", () => {
        test("test succesful response with 200", async () => {

            const expectedResult = [{
                toDoId: "cd90",
                text: "Eat Lunch"
            },
            {
                toDoId: "ab12",
                text: "Go Facial"
            }];

            const req = {}
            const res = {
                json: jest.fn().mockImplementation((result) => result),
                status: jest.fn(() => res)
            }

            ToDoController.getToDos = jest.fn().mockReturnValue(expectedResult);

            await ToDoRouter.getToDosRouter(req, res);
            
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toHaveReturnedWith({data: expectedResult});
        });
    });

    describe("PUT ToDo", () => {
        test("test succesful response with 200", async () => {

            const expectedResult = [{
                toDoId: "cd90db553",
                text: "Fake Updated Data"
            }];

            const req = {}
            const res = {
                json: jest.fn().mockImplementation((result) => result),
                status: jest.fn(() => res)
            }

            ToDoController.updateToDo = jest.fn().mockReturnValue(expectedResult);

            await ToDoRouter.putToDosRouter(req, res);
            
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toHaveReturnedWith({data: expectedResult});
        });
    });

    describe("DELETE ToDo", () => {
        test("test succesful response with 204", async () => {

            const req = {}
            const res = {
                json: jest.fn().mockImplementation((result) => result),
                status: jest.fn(() => res)
            }

            ToDoController.deleteToDo = jest.fn().mockReturnValue({});

            await ToDoRouter.deleteToDoRouter(req, res);
            
            expect(res.status).toBeCalledWith(204);
        });
    });

    describe("DELETE All ToDo", () => {
        test("test succesful response with 204", async () => {

            const req = {}
            const res = {
                json: jest.fn().mockImplementation((result) => result),
                status: jest.fn(() => res)
            }

            ToDoController.deleteAllToDo = jest.fn().mockReturnValue({});

            await ToDoRouter.deleteAllToDoRouter(req, res);
            
            expect(res.status).toBeCalledWith(204);
        });
    });
});