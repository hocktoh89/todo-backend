const ToDo = require("../model/ToDo")

export async function createToDo (text) {
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

export async function getToDos () {
    try {
        return await ToDo.find({});
    } catch (err) {
        throw err;
    }
}

export async function updateToDo (id, data) {
    try {
        const result = await ToDo.findByIdAndUpdate(id, data, {new: true});

        if (!result) {
            throw new Error(`No data updated, id doesn't exist`);
        }

        return result;

    } catch (err) {
        throw err;
    }
}

export async function deleteToDo (id) {
    try {
        return await ToDo.findByIdAndDelete(id);
    } catch (err) {
        throw err;
    }
}