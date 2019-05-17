// Application logic module

let projects = [];

const project = (title) => {
    let toDoItems = [];

    const addToDoItem = (toDoItem) => {
        toDoItems.push(toDoItem);
    }

    return { title, toDoItems, addToDoItem };
}

const toDoItem = (title, disc, dueDate, isUrgent, isCompleted) => {
    return { title, disc, dueDate, isUrgent, isCompleted };
}

let defaultProject = project("Default");
let study = project("Study");

projects.push(defaultProject);
projects.push(study);

defaultProject.addToDoItem(toDoItem("Buy Milk", "Buy Milk from store", "16/5/2019", true, true));
defaultProject.addToDoItem(toDoItem("Buy Chesse", "Buy Chesse from store", "16/5/2019", true, false));

export { projects, defaultProject };