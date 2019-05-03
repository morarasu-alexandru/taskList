export const findIndex = function findIndex(el) {
    if (!el) return -1;
    var i = 0;
    while ((el = el.previousSibling) != null ) {
        i++
    }
    return i - 1;
}

export const createTaskElem = function createTaskElem(taskValue) {
    return `<li>
        <span>${taskValue}</span>
        <button class="renameTask">Rename</button>
        <button class="isDone">Done</button>
        <button class="removeTask">X</button>
    </li>`
}

export const createRenameTaskElem = function createRenameTask(taskValue) {
    return `<input type='text' value="${taskValue}" />
        <button class="acceptTask">Accept</button>
        <button class="cancelTask">Cancel</button>`
}

export const createRenamedTaskElem = function createTaskElem(taskValue) {
    return `<span>${taskValue}</span>
        <button class="renameTask">Rename</button>
        <button class="isDone">Done</button>
        <button class="removeTask">X</button>`
}