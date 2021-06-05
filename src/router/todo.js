import { createToDo, getToDos, updateToDo, deleteToDo } from '../controller/todo';

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

export const putToDosRouter = async (req, res) => {
    try {
        const { params, body: data } = req || {};
        const { id } = params || {};
        const updatedToDo = await updateToDo(id, data);

        res.status(200).json({
            data: updatedToDo
        });

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

export const deleteToDoRouter = async (req, res) => {
    try {
        const { params } = req || {};
        const { id } = params || {};
        
        await deleteToDo(id);

        res.status(204).json({});

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}