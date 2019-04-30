const $taskInput = document.querySelector('#task');
const $taskForm = document.querySelector('#taskForm');
const $taskList = document.querySelector('#taskList');

loadEventListeners();

function loadEventListeners() {
    taskForm.addEventListener('submit', addTask);
}

function addTask(e) {
    const taskValue = taskInput.value;
    const element = `
    <li>
        <span>${taskValue}</span>
        <button class="isDone">Done</button>
        <button class="removeTask">X</button>
    </li>`;

    taskList.insertAdjacentHTML('beforeend', element);
    taskInput.value = '';

    e.preventDefault();
}

