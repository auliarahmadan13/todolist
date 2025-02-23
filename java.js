let editIndex = null;
function addTask() {
    let inputBox = document.getElementById("input-box");
    let taskList = document.getElementById("task-list");
    if (inputBox.value === "") {
        alert("Task cannot be empty!");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `${inputBox.value} 
        <button class='edit-btn' onclick='editTask(this)'>Edit</button>
        <button class='delete-btn' onclick='deleteTask(this)'>Delete</button>`;
    taskList.appendChild(li);
    inputBox.value = "";
}

function editTask(button) {
    let li = button.parentElement;
    document.getElementById("edit-input").value = li.firstChild.textContent.trim();
    document.getElementById("edit-modal").style.display = "flex";
    editIndex = [...li.parentElement.children].indexOf(li);
}

function saveEdit() {
    if (editIndex !== null) {
        let taskList = document.getElementById("task-list");
        taskList.children[editIndex].firstChild.textContent = document.getElementById("edit-input").value;
        closeModal();
    }
}

function closeModal() {
    document.getElementById("edit-modal").style.display = "none";
}

function deleteTask(button) {
    if (confirm("Are you sure you want to delete this task?")) {
        button.parentElement.remove();
    }
}