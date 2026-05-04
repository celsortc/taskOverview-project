function addTask() {
  const newTaskInput = document.querySelector(".task-input");
  const tasks = document.querySelector(".tasks");

  const li = document.createElement("li");
  const span = document.createElement("span");

  if (newTaskInput.value === "") {
    alert("Please enter a task.");
    return;
  }
  li.textContent = newTaskInput.value;
  span.textContent = "\u00d7"; // Unicode for multiplication sign (×)
  span.classList.add("delete-btn");

  li.appendChild(span);

  tasks.appendChild(li);

  newTaskInput.value = "";
  newTaskInput.focus(); // volta foco pra janela de input

  tasks.addEventListener("click", completeTask);
  span.addEventListener("click", removeTask);
}

function completeTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}

function removeTask(event) {
  event.target.parentElement.remove();
}
