// Application logic module

let projects = [];

const project = (title) => {
    let toDoItems = [];

    const addToDoItem = (toDoItem) => {
        toDoItems.push(toDoItem);
    }

    return { title, toDoItems, addToDoItem };
}

const toDoItem = (title, disc, dueDate, priority, completed) => {
    return { title, disc, dueDate, priority, completed };
}

let defaultProject = project("Default");

projects.push(defaultProject);

defaultProject.addToDoItem(toDoItem("Buy Milk", "Buy Milk from store", "16/5/2019", 3, false));
defaultProject.addToDoItem(toDoItem("Buy Chesse", "Buy Chesse from store", "16/5/2019", 3, false));

export { projects };