const addButtonRef = document.getElementById('addButton')
const taskInputRef = document.getElementById('taskInput')
const todoContainerRef = document.querySelector('.ul-list-class')
function addTask() {
    let value = taskInputRef.value.trim()
    if (value === "") {
        alert("Bhai Shi Value De")
        taskInputRef.value = ""
        return
    }

    const allTasks = document.querySelectorAll('.todo-item span')
    for (let task of allTasks) {
        if (task.innerText.toLowerCase() === taskInputRef.value.toLowerCase()) {
            alert("Same task already diya hua h bhai")
            return
        }
    }

    const li = document.createElement('li')
    const span = document.createElement('span')
    const removeButton = document.createElement('button')

    span.innerText = value
    removeButton.innerText = "Remove"

    li.classList.add('todo-item')
    removeButton.classList.add('remove-btn')

    li.appendChild(span)
    li.appendChild(removeButton)

    todoContainerRef.appendChild(li)

    taskInputRef.value = ""

    removeButton.addEventListener('click', function () {
        li.remove()
    })
}
addButtonRef.addEventListener('click', addTask)

taskInputRef.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addTask()
    }
})