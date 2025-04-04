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
    delete: "✖️",
  },
  {
    id: 2,
    title: "非同期処理",
    date: "2024-01-02",
    status: "作業中",
    delete: "✖️",
  },
  {
    id: 3,
    title: "オブジェクト指向",
    date: "2024-01-03",
    status: "作業中",
    delete: "✖️",
  },
];

// step① タスク初期表示ボタンを押したらコンソールにtodoListが表示される
// step② タスク初期表示ボタンを押したらtableタグにtodoListの0番目が表示される
// step③ タスク初期表示ボタンを押したらtableタグにtodoListがすべて表示される
// step④ ボタンを押さなくても画面をリロードしたらtodoListがすべて表示される

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
      if (work.innerText === "作業中") {
        work.innerText = "完了";
      } else {
        work.innerText = "作業中";
      }
    });
    status.appendChild(work);
    tr.appendChild(status);

    const deletebtn = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = todo.delete;
    deleteButton.addEventListener("click", function () {
      tr.remove();
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
});

function addTodo() {
  const tr = document.createElement("tr");

  const tdId = document.createElement("td");
  tdId.innerText = table.rows.length;
  tr.appendChild(tdId);

  const tdText = document.createElement("td");
  tdText.innerText = text.value;
  tr.appendChild(tdText);

  const tdDate = document.createElement("td");
  tdDate.innerText = date.value;
  tr.appendChild(tdDate);

  const tdStatus = document.createElement("td");
  const done = document.createElement("button");
  done.innerText = "作業中";
  done.addEventListener("click", function () {
    if (done.innerText === "作業中") {
      done.innerText = "完了";
    } else {
      done.innerText = "作業中";
    }
  });
  tdStatus.appendChild(done);
  tr.appendChild(tdStatus);

  const tdAddition = document.createElement("td");
  const deletebtn = document.createElement("button");
  deletebtn.innerText = "✖️";
  deletebtn.addEventListener("click", function () {
    tr.remove();
  });

  tdAddition.appendChild(deletebtn);
  tr.appendChild(tdAddition);
  tbody.appendChild(tr);
  table.appendChild(tbody);

  text.value = "";
  date.value = "";
}
