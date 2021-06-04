const createToDo = require('../controller/todo');

const createToDoRouter = async (req, res) => {
    try {
        const { text: inputText} = req.body || {};
        const { toDoId, text } = await createToDo(inputText);

        res.status(200).json({
            toDoId, 
            text
        });

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = createToDoRouter