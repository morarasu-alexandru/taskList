const $taskInput = document.querySelector('#task');
const $taskForm = document.querySelector('#taskForm');
const $taskList = document.querySelector('#taskList');

loadEventListeners();

function loadEventListeners() {
    $taskForm.addEventListener('submit', addTask);
    $taskList.addEventListener('click', removeTask);
    $taskList.addEventListener('click', doneOrNotDoneTask);
}

function doneOrNotDoneTask(e) {
    const target = e.target;

    if(target.classList.contains('isDone')) {
        const textElement = target.parentElement.firstElementChild;

        if (textElement.classList.contains('done')) {
            textElement.classList.remove('done');
            target.textContent = 'Done'
        } else {
            textElement.classList.add('done');
            target.textContent = 'Not done';
        }
    }


}

function addTask(e) {
    const taskValue = $taskInput.value;
    const element = `
    <li>
        <span>${taskValue}</span>
        <button class="isDone">Done</button>
        <button class="removeTask">X</button>
    </li>`;

    $taskList.insertAdjacentHTML('beforeend', element);
    $taskInput.value = '';

    e.preventDefault();
}

function removeTask(e) {
    if(e.target.classList.contains('removeTask')) {
        e.target.parentElement.remove();
    }
}
