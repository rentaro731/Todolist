const form = document.getElementById("form");
const text = document.getElementById("text");
const date = document.getElementById("date");
const status = document.getElementById("workButton");
const addition = document.getElementById("addition");
const table = document.getElementById("table");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

function add() {
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

  table.appendChild(tr);

  text.value = "";
  date.value = "";
  workButton.value = "";
  addition.value = "";
}
