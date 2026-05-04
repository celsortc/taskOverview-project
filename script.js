const tasks = document.querySelector(".tasks");

tasks.addEventListener("click", () => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  } else if (event.target.closest("li")) {
    event.target.closest("li").classList.toggle("completed");
  }
  console.log(event.target.closest("li"));

  // saveData();
});

function addTask() {
  const newTaskInput = document.querySelector(".task-input");

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
}

function saveData() {
  localStorage.setItem("tasks", tasks.innerHTML);
}
