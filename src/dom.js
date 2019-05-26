// Dom Manipulation Module
import { projects } from './app';
import { addEventListenerToCheckBox, addEventListenerToPrioritykBox, addEventListenerToExpandOption } from './index';

function getProjectsList(projects) {
    const projectList = document.querySelector("#project-list");
    if (projectList.children.length > 0) {
        while (projectList.children.length !== 0) {
          projectList.removeChild(projectList.lastChild);
        }
    }

    for (let i = 0; i < projects.length; i++) {
        const projectItem = document.createElement("li");
        projectItem.setAttribute("id", `${i + 1}`);
        projectItem.innerHTML = projects[i].title;
        projectItem.style.fontSize = "2.2rem";
        projectItem.style.padding = "20px";
        projectItem.style.marginBottom = "10px";
        projectList.appendChild(projectItem);
    }

    return projectList;
}

function renderProjectsList() {
    const projectListContainer = document.querySelector(".project-list-container");
    const projectList = getProjectsList(projects);
    projectListContainer.appendChild(projectList);
}

function renderProjectName(name) {
    const projectName = document.querySelector("#project-name-heading");
    projectName.innerHTML = name;
}

function renderToDoList(toDoItems) {
    const toDoList = document.querySelector("#todo-list");

    if (toDoList.children.length > 0) {
        while (toDoList.children.length !== 0) {
          toDoList.removeChild(toDoList.lastChild);
        }
    }

    for (let i = 0; i < toDoItems.length; i++) {
        const toDoItem = document.createElement("li");
        toDoItem.setAttribute("id", `${i + 1}`);

        const taskCompletedCheckbox = document.createElement('div');
        taskCompletedCheckbox.classList.add("taskCompleteChbx");

        if (toDoItems[i].isCompleted) {
            taskCompletedCheckbox.style.backgroundImage = "url('icons/checked.png')";
        } else {
            taskCompletedCheckbox.style.backgroundImage = "url('icons/not-checked.png')";
        }
        taskCompletedCheckbox.style.backgroundRepeat = "no-repeat";
        taskCompletedCheckbox.style.backgroundPosition = "center";
        taskCompletedCheckbox.style.flex = 1;

        const prioritySelectionBox = document.createElement('div');
        prioritySelectionBox.classList.add("priorityStatus");

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
        expandOption.style.flex = 1;
        const expandOptionBtn = document.createElement("button");
        expandOptionBtn.innerHTML = "&#x25BC";
        expandOptionBtn.style.backgroundColor = "inherit";
        expandOptionBtn.style.border = "0";
        expandOptionBtn.style.cursor = "pointer";
        expandOption.appendChild(expandOptionBtn);
        expandOptionBtn.classList.add("expandBtn");

        toDoItem.appendChild(taskCompletedCheckbox);
        toDoItem.appendChild(prioritySelectionBox);
        toDoItem.appendChild(toDoItemTitle);
        toDoItem.appendChild(toDoItemDueDate);
        toDoItem.appendChild(expandOption);
        toDoList.appendChild(toDoItem);
    }

    if (toDoList.children.length === 0) {
        const toDoItem = document.createElement("li");
        toDoItem.innerHTML = "Click on <strong> Add To Do </strong> Button to add a new To Do Item";
        toDoItem.style.padding = "30px";
        toDoList.appendChild(toDoItem);
    }

    const todoItemsContainer = document.querySelector(".todo-items-container");
    todoItemsContainer.appendChild(toDoList);

    addEventListenerToCheckBox();
    addEventListenerToPrioritykBox();
    addEventListenerToExpandOption();
}

export { renderProjectsList, renderProjectName, renderToDoList };