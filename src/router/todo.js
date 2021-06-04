import { createToDo, getToDos } from '../controller/todo';

export const createToDoRouter = async (req, res) => {
    try {
        const { text: inputText} = req.body || {};
        const { toDoId, text } = await createToDo(inputText);

        res.status(201).json({
            data: {
                toDoId, 
                text
            }
        });

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

export const getToDosRouter = async (req, res) => {
    try {
        const allToDos = await getToDos();

        res.status(200).json({
            data: allToDos
        });

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}
