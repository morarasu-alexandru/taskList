const $taskInput = document.querySelector('#task');
const $taskForm = document.querySelector('#taskForm');
const $taskList = document.querySelector('#taskList');

const taskList = [];

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
        <button class="renameTask">Rename</button>
        <button class="isDone">Done</button>
        <button class="removeTask">X</button>
    </li>`;

    $taskList.insertAdjacentHTML('beforeend', element);
    taskList.push({isDone: false, value: taskValue});
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
        const element = `
        <input type='text' value="${taskValue}" />
        <button class="acceptTask">Accept</button>
        <button class="cancelTask">Cancel</button>
        `;

        while($li.firstChild) {
            $li.removeChild($li.firstChild);
        }

        $li.insertAdjacentHTML('beforeend', element);
        taskList[liIndex].value = taskValue;
    }
}

function acceptRenameTask(e) {
    if (e.target.classList.contains('renameTask')) {
        const liIndex = findIndex($li);


    }
}

function cancelRenameTask(e) {
    if (e.target.classList.contains('renameTask')) {
        const liIndex = findIndex($li);


    }
}

function findIndex(el) {
    if (!el) return -1;
    var i = 0;
    while ((el = el.previousSibling) != null ) {
        i++
    }
    return i/2 - 1;
}

