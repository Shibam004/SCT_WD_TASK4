function addTask() {
  const taskInput = document.getElementById("task-input");
  const datetimeInput = document.getElementById("datetime-input");

  const taskText = taskInput.value.trim();
  const taskDateTime = datetimeInput.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.className = "task-item";

  const taskContent = document.createElement("div");
  taskContent.className = "task-content";
  taskContent.innerText = taskText;

  if (taskDateTime) {
    const datetimeTag = document.createElement("div");
    datetimeTag.className = "datetime";
    datetimeTag.innerText = "⏰ " + new Date(taskDateTime).toLocaleString();
    taskContent.appendChild(datetimeTag);
  }

  const controls = document.createElement("div");
  controls.className = "task-controls";

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerText = "✔️ Complete";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerText = "✏️ Edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskText);
    if (newText !== null) {
      taskContent.firstChild.nodeValue = newText;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "🗑️ Delete";
  deleteBtn.onclick = () => taskList.removeChild(li);

  controls.appendChild(completeBtn);
  controls.appendChild(editBtn);
  controls.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(controls);
  taskList.appendChild(li);

  // Clear input fields
  taskInput.value = "";
  datetimeInput.value = "";
}
