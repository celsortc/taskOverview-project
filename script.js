// Fix for mobile Safari viewport height
function setVh() {
  let vh = window.innerHeight * 0.01; //1vh = 1% da altura da janela
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVh();
window.addEventListener("resize", setVh);
window.addEventListener("orientationchange", setVh);

const tasks = document.querySelector(".tasks");
const taskInput = document.querySelector(".task-input");

tasks.addEventListener("click", manageTasks);

function manageTasks(e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  } else if (e.target.closest("li")) {
    e.target.closest("li").classList.toggle("completed");
  }
  saveData();
}

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const newTaskInput = document.querySelector(".task-input");

  const li = document.createElement("li");
  const deleteBtn = document.createElement("span");
  const text = document.createElement("span");

  if (newTaskInput.value === "") {
    alert("Please enter a task.");
    newTaskInput.focus();
    return;
  }
  text.textContent = newTaskInput.value;
  text.classList.add("task-text");

  deleteBtn.textContent = "\u00d7"; // Unicode for multiplication sign (×)
  deleteBtn.classList.add("delete-btn");

  li.appendChild(text);
  li.appendChild(deleteBtn);

  tasks.appendChild(li);

  saveData();

  newTaskInput.value = "";
  newTaskInput.focus(); // volta foco pra janela de input
}

function saveData() {
  localStorage.setItem("tasks", tasks.innerHTML);
}

function showData() {
  const savedTasks = localStorage.getItem("tasks");
  console.log(savedTasks);

  if (savedTasks) {
    tasks.innerHTML = savedTasks;
  }
}

showData();
