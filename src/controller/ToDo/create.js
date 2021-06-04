const ToDo = require("../../model/ToDo")

async function createToDo (text) {
    try {

        const foundToDo = await ToDo.findOne({text:text});

        if (foundToDo) {
            throw new Error(`To do - ${text} - exist`);
        } 

        const newToDo = new ToDo ({ text })

        await newToDo.save();

        return {
            toDoId: newToDo._id,
            text: newToDo.text
        }

    } catch (err) {
        throw err;
    }
}

module.exports = createToDo;