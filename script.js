const form = document.getElementById("form");
const text = document.getElementById("text");
const date = document.getElementById("date");
const status = document.getElementById("workButton");
const addition = document.getElementById("addition");
const table = document.getElementById("table");
const tbody = document.getElementById("tbody");
const todoList = [
  {
    id: 1,
    title: "Javascriptの基礎",
    date: "2024-01-01",
    status: "作業中",
  },
  {
    id: 2,
    title: "非同期処理",
    date: "2024-01-02",
    status: "作業中",
  },
  {
    id: 3,
    title: "オブジェクト指向",
    date: "2024-01-03",
    status: "作業中",
  },
];
// step① タスク初期表示ボタンを押したらコンソールにtodoListが表示される
// step② タスク初期表示ボタンを押したらtableタグにtodoListの0番目が表示される
// step③ タスク初期表示ボタンを押したらtableタグにtodoListがすべて表示される
// step④ ボタンを押さなくても画面をリロードしたらtodoListがすべて表示される
function resetId() {
  todoList.forEach((item, index) => {
    item.id = index + 1;
  });
}
const showTodo = () => {
  tbody.innerHTML = "";
  todoList.forEach((todo) => {
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
    const work = document.createElement("button");
    work.innerText = todo.status;
    work.addEventListener("click", function () {
      if (todo.status === "作業中") {
        todo.status = "完了";
      } else {
        todo.status = "作業中";
      }
      showTodo();
    });
    status.appendChild(work);
    tr.appendChild(status);

    const deletebtn = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "✖️";
    deleteButton.addEventListener("click", function () {
      // tr.remove();
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
// TODO: エラーになる
// todoList.addEventListener("click", () => showTodo());

// TODO: tableの中ではなくtbodyの中に追加するようにする

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
    status: "作業中",
  });
  text.value = "";
  date.value = "";
}
