import { constants } from "zlib";

// Dom Manipulation Module

function renderProjectsList(projects) {
    const projectList = document.createElement("ul");
    for (let i = 0; i < projects.length; i++) {
        const projectItem = document.createElement("li");
        projectItem.innerHTML = projects[i].title;
        projectItem.style.fontSize = "2.2rem";
        projectItem.style.margin = "25px 0";
        projectList.appendChild(projectItem);
    }

    return projectList;
}

function renderProjectTitle(project) {
    const projectTitle = document.createElement("h1");
    projectTitle.innerHTML = project.title;

    return projectTitle;
}

function renderToDoList(toDoItems) {
    const toDoList = document.createElement("ul");
    for (let i = 0; i < toDoItems.length; i++) {
        const toDoItem = document.createElement("li");

        const taskCompletedCheckbox = document.createElement('div');
        if (toDoItems[i].isCompleted) {
            taskCompletedCheckbox.style.backgroundImage = "url('icons/checked.png')";
        } else {
            taskCompletedCheckbox.style.backgroundImage = "url('icons/not-checked.png')";
        }
        taskCompletedCheckbox.style.backgroundRepeat = "no-repeat";
        taskCompletedCheckbox.style.backgroundPosition = "center";
        taskCompletedCheckbox.style.flex = 1;

        const prioritySelectionBox = document.createElement('div');
        if (toDoItems[i].isUrgent) {
            prioritySelectionBox.style.backgroundImage = "url('icons/important.png')";
        } else {
            prioritySelectionBox.style.backgroundImage = "url('icons/not-important.png')";
        }
        prioritySelectionBox.style.backgroundRepeat = "no-repeat";
        prioritySelectionBox.style.backgroundPosition = "center";
        prioritySelectionBox.style.flex = 1;

        const toDoItemTitle = document.createElement("span");
        toDoItemTitle.innerHTML = toDoItems[i].title;
        toDoItemTitle.style.flex = 5;

        const toDoItemDueDate = document.createElement("date");
        toDoItemDueDate.innerHTML = toDoItems[i].dueDate;
        toDoItemDueDate.style.flex = 5;

        const expandOption = document.createElement("div");
        expandOption.innerHTML = "&#x25BC";
        expandOption.style.flex = 1;

        toDoItem.appendChild(taskCompletedCheckbox);
        toDoItem.appendChild(prioritySelectionBox);
        toDoItem.appendChild(toDoItemTitle);
        toDoItem.appendChild(toDoItemDueDate);
        toDoItem.appendChild(expandOption);
        toDoList.appendChild(toDoItem);
    }

    return toDoList;
}

export { renderProjectsList, renderProjectTitle, renderToDoList };