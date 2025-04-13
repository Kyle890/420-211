let tasks = [];
let currentFilter = "all";

const inputBox = document.getElementById("input-box");
const dateBox = document.getElementById("date-box");
const listContainer = document.getElementById("list-container");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  tasks = saved ? JSON.parse(saved) : [];
  renderTasks();
}

function handleAdd() {
  const text = inputBox.value.trim();
  const date = dateBox.value;
  if (!text) {
    alert("Veuillez entrer une tâche !");
    return;
  }

  tasks.push({
    id: Date.now(),
    text,
    completed: false,
    dueDate: date,
    notified: false
  });

  inputBox.value = "";
  dateBox.value = "";
  saveTasks();
  renderTasks();
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newText = prompt("Modifier la tâche :", task.text);
  if (newText !== null && newText.trim() !== "") {
    task.text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector(`.filters button[onclick="setFilter('${filter}')"]`).classList.add("active");
  renderTasks();
}

function renderTasks() {
  listContainer.innerHTML = "";

  const filtered = tasks.filter(t =>
    currentFilter === "all" ? true :
    currentFilter === "active" ? !t.completed :
    t.completed
  );

  filtered.forEach(task => {
    const li = document.createElement("li");
    li.setAttribute("draggable", "true");

    const today = new Date();
    const due = task.dueDate ? new Date(task.dueDate) : null;

    if (due) {
      const diffTime = due - today;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      if (diffDays < 0 && !task.completed) {
        li.classList.add("overdue");
      } else if (diffDays <= 1 && diffDays >= 0 && !task.completed) {
        li.classList.add("due-soon");
      }
    }

    if (task.completed) li.classList.add("checked");

    li.innerHTML = `
      <span class="task-text" ondblclick="editTask(${task.id})">${task.text}</span>
      <small>${task.dueDate ? `⏰ ${task.dueDate}` : ""}</small>
      <div class="actions">
        <button onclick="toggleComplete(${task.id})">✓</button>
        <button onclick="deleteTask(${task.id})">✖</button>
      </div>
    `;

    addDragEvents(li, task.id);
    listContainer.appendChild(li);
  });
}

// Drag & Drop
let dragSourceId = null;

function addDragEvents(el, id) {
  el.addEventListener("dragstart", () => {
    dragSourceId = id;
    el.classList.add("dragging");
  });

  el.addEventListener("dragend", () => {
    el.classList.remove("dragging");
  });

  el.addEventListener("dragover", e => e.preventDefault());

  el.addEventListener("drop", () => {
    const fromIndex = tasks.findIndex(t => t.id === dragSourceId);
    const toIndex = tasks.findIndex(t => t.id === id);
    const dragged = tasks.splice(fromIndex, 1)[0];
    tasks.splice(toIndex, 0, dragged);
    saveTasks();
    renderTasks();
  });
}

// 🔔 Notification d'échéance proche
function checkDeadlines() {
  const now = new Date();
  tasks.forEach(task => {
    if (!task.dueDate || task.completed) return;

    const due = new Date(task.dueDate);
    const diffTime = due - now;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays <= 1 && diffDays > 0 && !task.notified) {
      alert(`⏰ La tâche "${task.text}" arrive à échéance demain !`);
      task.notified = true;
    }
  });

  saveTasks(); // pour enregistrer l'état notified
}

setInterval(checkDeadlines, 60 * 60 * 1000); // toutes les heures