import { projects, project, toDoItem  } from '../src/app';
import { renderProjectsList, renderProjectName, renderToDoList } from '../src/dom';
let format = require('date-fns/format');

// Default Project Initialized

let defaultProject = project("Default");

projects.push(defaultProject);

defaultProject.addToDoItem(toDoItem("Buy Milk", "Buy Milk from store", "16/5/2019", true, true));
defaultProject.addToDoItem(toDoItem("Buy Chesse", "Buy Chesse from store", "16/5/2019", true, false));

renderProjectsList();
addEventListenerToProjectItem();

renderProjectName("Default");

renderToDoList(defaultProject.toDoItems);

const defaultProjectElement = document.querySelector("#project-list li");
defaultProjectElement.classList.add("selected");

// Event Listeners

const addNewProjectBtn = document.querySelector("#new-project-btn");

addNewProjectBtn.addEventListener("click", () => { 
    const formContainer = document.querySelector(".new-project-form-container");
    formContainer.classList.remove("hidden");
    formContainer.classList.add("show");
});

const newProjectForm = document.querySelector("#new-project-form");

newProjectForm.addEventListener("submit", (e) => {
    const projectName = document.querySelector("#project-name").value;
    projects.push(project(projectName));
    renderProjectsList();
    addEventListenerToProjectItem();

    const formContainer = document.querySelector(".new-project-form-container");
    formContainer.classList.remove("show");
    formContainer.classList.add("hidden");
    e.preventDefault();
});

const newProjectCancelBtn = document.querySelector("#project-cancel-btn");

newProjectCancelBtn.addEventListener("click", () => {
    const formContainer = document.querySelector(".new-project-form-container");
    formContainer.classList.remove("show");
    formContainer.classList.add("hidden");
});

const addNewTodoBtn = document.querySelector("#new-todo-btn");

addNewTodoBtn.addEventListener("click", () => {
    const formContainer = document.querySelector(".new-todo-form-container");
    formContainer.classList.remove("hidden");
    formContainer.classList.add("show");
});

const newTodoForm = document.querySelector("#new-todo-form");

newTodoForm.addEventListener("submit", (e) => {
    const todoTitle = document.querySelector("#todo-title").value;
    const todoDiscription = document.querySelector("#todo-description").value;
    const todoDueDate = document.querySelector("#todo-due-date").value;
    let splitDate = todoDueDate.split("-");
    let convertedDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
    const newTodoDueDate = format(convertedDate, "DD/MM/YYYY");
    const todoImportance = document.querySelector("#importance").checked;

    let selectedProjectElement = document.querySelector(".selected");
    
    if (selectedProjectElement) {
        let project = projects[selectedProjectElement.id - 1];
        project.addToDoItem(toDoItem(todoTitle, todoDiscription, newTodoDueDate, todoImportance, false));
        renderToDoList(project.toDoItems);
        
    }
    
    const formContainer = document.querySelector(".new-todo-form-container");
    formContainer.classList.remove("show");
    formContainer.classList.add("hidden");
    e.preventDefault();
});

const newTodoCancelBtn = document.querySelector("#todo-cancel-btn");

newTodoCancelBtn.addEventListener("click", () => {
    const formContainer = document.querySelector(".new-todo-form-container");
    formContainer.classList.remove("show");
    formContainer.classList.add("hidden");
});

function addEventListenerToProjectItem() {
    const projectList = document.querySelectorAll("#project-list > li");

    for (let i = 0; i < projectList.length; i++) {
        projectList[i].addEventListener("click", (e) => {
            renderProjectName(e.target.innerText);

            for (let i = 0; i < projectList.length; i++) {
                if (projectList[i].classList.contains("selected")) {
                    projectList[i].classList.remove("selected");
                }
            }

            e.target.classList.add("selected");
            
            let project = projects[e.target.id - 1];

            renderToDoList(project.toDoItems);
        });
    }
}

function addEventListenerToCheckBox() {
    const checkBoxItems = document.querySelectorAll(".taskCompleteChbx");
    for (let i = 0; i < checkBoxItems.length; i++) {
        checkBoxItems[i].addEventListener("click", (e) => {
            let selectedProjectElement = document.querySelector(".selected");

            let selectedProject = projects[selectedProjectElement.id - 1];

            let toDoItem = selectedProject.toDoItems[e.target.parentNode.id - 1];

            if (toDoItem.isCompleted) {
                toDoItem.isCompleted = false;
            } else {
                toDoItem.isCompleted = true;
            }
        
            if (selectedProjectElement) {
                renderToDoList(selectedProject.toDoItems);
            }
        });
    }
}

function addEventListenerToPrioritykBox() {
    const prioritySelectionItems = document.querySelectorAll(".priorityStatus");
    for (let i = 0; i < prioritySelectionItems.length; i++) {
        prioritySelectionItems[i].addEventListener("click", (e) => {
            let selectedProjectElement = document.querySelector(".selected");

            let selectedProject = projects[selectedProjectElement.id - 1];

            let toDoItem = selectedProject.toDoItems[e.target.parentNode.id - 1];

            if (toDoItem.isUrgent) {
                toDoItem.isUrgent = false;
            } else {
                toDoItem.isUrgent = true;
            }
        
            if (selectedProjectElement) {
                renderToDoList(selectedProject.toDoItems);
            }
        });
    }
}

function addEventListenerToExpandOption() {
    const ExapandBtns = document.querySelectorAll(".expandBtn");
    for (let i = 0; i < ExapandBtns.length; i++) {
        ExapandBtns[i].addEventListener("click", (e) => {
            let selectedProjectElement = document.querySelector(".selected");

            let toDoItemElement = e.target.parentNode.parentNode;
            toDoItemElement.style.borderBottom = "0";

            let selectedProject = projects[selectedProjectElement.id - 1];

            let toDoItem = selectedProject.toDoItems[toDoItemElement.id - 1];

            const descriptionItem = document.createElement("li");
            const description = document.createElement("p");
            description.innerHTML = toDoItem.discription;
            description.style.paddingLeft = "22px";
            descriptionItem.appendChild(description);
            // description.style
            // e.target.parentNode.parentNode.appendChild(description);
            toDoItemElement.parentNode.insertBefore(descriptionItem, toDoItemElement.nextSibling);
        });
    }
}

export { addEventListenerToCheckBox, addEventListenerToPrioritykBox, addEventListenerToExpandOption };