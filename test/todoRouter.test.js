jest.mock('../src/controller/todo');

import createToDoRouter from '../src/router/todo';
import createToDoController from '../src/controller/todo';

describe("Test ToDo Router", () => {

  describe("Post ToDo", () => {

      test("test succesful response with 200", async () => {

        const expectedResult = {
            toDoId: "123",
            text: "Doctor"
        }

        const req = {}
        const res = {
            json: jest.fn().mockImplementation((result) => result),
            status: jest.fn(() => res)
        }

        createToDoController.mockReturnValue(expectedResult);

        await createToDoRouter(req, res);
        
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toHaveReturnedWith(expectedResult);
      });     

  });
});