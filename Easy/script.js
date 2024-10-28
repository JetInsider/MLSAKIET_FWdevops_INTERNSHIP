let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    
    if (task) {
        tasks.push(task);
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
