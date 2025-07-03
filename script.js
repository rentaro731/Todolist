const form = document.getElementById("form");
const text = document.getElementById("text");
const date = document.getElementById("date");
const table = document.getElementById("table");
const tbody = document.getElementById("tbody");
const radios = document.querySelectorAll('input[name="light"]');
const ALL = "all";
const NOT_STARTED = "Not Started";
const DONE = "Done";
const todoList = [
  {
    id: 1,
    title: "Javascriptの基礎",
    date: "2024-01-01",
    status: NOT_STARTED,
  },
  {
    id: 2,
    title: "非同期処理",
    date: "2024-01-02",
    status: NOT_STARTED,
  },
  {
    id: 3,
    title: "オブジェクト指向",
    date: "2024-01-03",
    status: NOT_STARTED,
  },
];
let filter = ALL;
radios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === ALL) {
      filter = ALL;
    } else if (value === "notStarted") {
      filter = NOT_STARTED;
    } else if (value === "done") {
      filter = DONE;
    }
    showTodo();
  });
});
function resetId() {
  todoList.forEach((item, index) => {
    item.id = index + 1;
  });
}
const showTodo = () => {
  tbody.innerHTML = "";
  const filteredList = todoList.filter((todo) => {
    if (filter === ALL) return true;
    return todo.status === filter;
  });

  filteredList.forEach((todo) => {
    const tr = document.createElement("tr");

    const id = document.createElement("td");
    id.innerText = todo.id;
    tr.appendChild(id);

    const title = document.createElement("td");
    title.innerText = todo.title;
    tr.appendChild(title);

    const date = document.createElement("td");
    date.innerText = todo.date;
    tr.appendChild(date);

    const status = document.createElement("td");
    const statusBtn = document.createElement("button");
    statusBtn.innerText = todo.status;
    statusBtn.addEventListener("click", function () {
      if (todo.status === NOT_STARTED) {
        todo.status = DONE;
      } else {
        todo.status = NOT_STARTED;
      }
      showTodo();
    });
    status.appendChild(statusBtn);
    tr.appendChild(status);

    const deletebtn = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "✖️";
    deleteButton.addEventListener("click", function () {
      const index = todoList.findIndex((item) => item.id === todo.id);
      todoList.splice(index, 1);
      resetId();
      showTodo();
    });
    deletebtn.appendChild(deleteButton);
    tr.appendChild(deletebtn);

    tbody.appendChild(tr);
    table.appendChild(tbody);
  });
};
window.addEventListener("load", showTodo);

form.addEventListener("keydown", function (event) {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    addTodo();
    showTodo();
  }
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo();
  showTodo();
});

function addTodo() {
  todoList.push({
    id: todoList.length + 1,
    title: text.value,
    date: date.value,
    status: NOT_STARTED,
  });
  text.value = "";
  date.value = "";
}
