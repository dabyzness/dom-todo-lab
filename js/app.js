// Create Cached Element References
const input = document.getElementById("todo-input");
const btn = document.getElementById("submit-button");
const list = document.getElementById("todo-list");

btn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  if (!input.value) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = input.value;
  list.appendChild(item);
  input.value = "";
}
