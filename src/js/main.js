import {findIndex, createTaskElem, createRenameTaskElem, createRenamedTaskElem} from './helpFunctions';

const $taskInput = document.querySelector('#task');
const $taskForm = document.querySelector('#taskForm');
const $taskList = document.querySelector('#taskList');

var taskList = [];

loadEventListeners();

function loadEventListeners() {
    $taskForm.addEventListener('submit', addTask);
    $taskList.addEventListener('click', removeTask);
    $taskList.addEventListener('click', doneOrNotDoneTask);
    $taskList.addEventListener('click', renameTask);
    $taskList.addEventListener('click', acceptRenameTask);
    $taskList.addEventListener('click', cancelRenameTask);
}

function doneOrNotDoneTask(e) {
    const target = e.target;

    if(target.classList.contains('isDone')) {
        const textElement = target.parentElement.firstElementChild;
        const liIndex = findIndex(e.target.parentElement);

        if (textElement.classList.contains('done')) {
            textElement.classList.remove('done');
            target.textContent = 'Done';
            taskList[liIndex].isDone = false;
        } else {
            textElement.classList.add('done');
            target.textContent = 'Not done';
            taskList[liIndex].isDone = true;
        }
    }
}

function addTask(e) {
    const taskValue = $taskInput.value;

    $taskList.insertAdjacentHTML('beforeend', createTaskElem(taskValue));
    taskList.push({value: taskValue, isDone: false});
    $taskInput.value = '';

    e.preventDefault();
}

function removeTask(e) {
    if (e.target.classList.contains('removeTask')) {
        const liIndex = findIndex(e.target.parentElement);

        e.target.parentElement.remove();
        taskList.splice(liIndex, 1);
    }
}

function renameTask(e) {
    if (e.target.classList.contains('renameTask')) {
        const $li = e.target.parentElement;
        const liIndex = findIndex($li);
        const taskValue = $li.firstElementChild.textContent;

        while($li.firstChild) {
            $li.removeChild($li.firstChild);
        }

        $li.insertAdjacentHTML('beforeend', createRenameTaskElem(taskValue));
        taskList[liIndex].value = taskValue;
    }
}

function acceptRenameTask(e) {
    if (e.target.classList.contains('acceptTask')) {
        const $li = e.target.parentElement;
        const liIndex = findIndex($li);
        const inputValue = $li.firstChild.value;

        while($li.firstChild) {
            $li.removeChild($li.firstChild);
        }

        taskList[liIndex].value = liIndex;
        $li.insertAdjacentHTML('beforeend', createRenamedTaskElem(inputValue));
    }
}

function cancelRenameTask(e) {
    if (e.target.classList.contains('cancelTask')) {
        const $li = e.target.parentElement;
        const liIndex = findIndex($li);

        while($li.firstChild) {
            $li.removeChild($li.firstChild);
        }

        $li.insertAdjacentHTML('beforeend', createRenamedTaskElem(taskList[liIndex].value));
    }
}