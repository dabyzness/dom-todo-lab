// Create Cached Element References
const input = document.getElementById("todo-input");
const submitBtn = document.getElementById("submit-button");
const resetBtn = document.getElementById("reset");
const list = document.getElementById("todo-list");

submitBtn.addEventListener("click", handleSubmit);
resetBtn.addEventListener("click", handleReset);

function handleSubmit(e) {
  if (!input.value) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = input.value;
  list.appendChild(item);
  input.value = "";
}

function handleReset(e) {
  for (let item of document.querySelectorAll("li")) {
    list.removeChild(item);
  }
}
