const task = document.getElementById("task");
const from = document.getElementById("from");

from.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(task.value);
});
