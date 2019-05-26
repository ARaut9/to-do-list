// Application logic module

let projects = [];

const project = (title) => {
    let toDoItems = [];

    const addToDoItem = (toDoItem) => {
        toDoItems.push(toDoItem);
    }

    return { title, toDoItems, addToDoItem };
}

const toDoItem = (title, discription, dueDate, isUrgent, isCompleted) => {
    return { title, discription, dueDate, isUrgent, isCompleted };
}

function toggleImportance(toDoItem) {
    if (toDoItem.isUrgent) {
        toDoItem.isUrgent = false;
    } else {
        toDoItem.isUrgent = true;
    }
}

function toggleCompleteness(toDoItem) {
    if (toDoItem.isCompleted) {
        toDoItem.isCompleted = false;
    } else {
        toDoItem.isCompleted = true;
    }
}

export { projects, project, toDoItem };