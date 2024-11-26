// Add task to the list
const addTaskToList = (task) => {
  const taskList = document.querySelector("#task-list");
  const li = document.createElement("li");
  li.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";
  deleteButton.onclick = () => removeTask(task, li);

  li.appendChild(deleteButton);
  taskList.appendChild(li);
};

// Save task to localStorage
const saveTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Remove task from the list and localStorage
const removeTask = (task, taskElement) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskElement.remove();
};

// Load tasks from localStorage
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToList(task));
};

// Toggle dark mode
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
  const isDarkMode = document.documentElement.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
};

// Load dark mode preference
const loadDarkMode = () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
      document.documentElement.classList.add("dark");
      document.querySelector("#switch").checked = true;
  }
};

// Add a new task when the button is clicked
document.querySelector("#add-task").addEventListener("click", () => {
  const taskInput = document.querySelector("#task-input");
  const task = taskInput.value.trim();
  if (task) {
      addTaskToList(task);
      saveTask(task);
      taskInput.value = ""; // Clear the input field
  }
});

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  loadTasks(); // Load tasks
  loadDarkMode(); // Load dark mode preference

  document.querySelector("#switch").addEventListener("change", toggleDarkMode);
});