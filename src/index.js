import { projects, defaultProject } from '../src/app';

import { renderProjectsList, renderProjectTitle, renderToDoList } from '../src/dom';

const projectListContainer = document.querySelector(".project-list-container");

const ul = renderProjectsList(projects);

projectListContainer.appendChild(ul);

const toDoItemsContainer = document.querySelector(".todo-items-container");

const projectTitle = renderProjectTitle(defaultProject);

toDoItemsContainer.appendChild(projectTitle);

const toDoList = renderToDoList(defaultProject.toDoItems);

toDoItemsContainer.appendChild(toDoList);