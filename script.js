function addTask() {
  const newTaskInput = document.querySelector(".task-input");
  const tasks = document.querySelector(".tasks");

  const li = document.createElement("li");
  const deleteBtn = document.createElement("span");
  const text = document.createElement("span");

  if (newTaskInput.value === "") {
    alert("Please enter a task.");
    return;
  }
  text.textContent = newTaskInput.value;
  text.classList.add("task-text");

  deleteBtn.textContent = "\u00d7"; // Unicode for multiplication sign (×)
  deleteBtn.classList.add("delete-btn");

  li.appendChild(text);
  li.appendChild(deleteBtn);

  tasks.appendChild(li);

  newTaskInput.value = "";
  newTaskInput.focus(); // volta foco pra janela de input

  tasks.addEventListener("click", () => {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
    if (event.target.classList.contains("task-text")) {
      event.target.firstElementChild.classList.toggle("completed");
      event.target.classList.toggle("completed");
    }
    saveData();
  });
}

function saveData() {
  localStorage.setItem("tasks", tasks.innerHTML);
}
