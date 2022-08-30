// Create Cached Element References
const input = document.getElementById("todo-input");
const submitBtn = document.getElementById("submit-button");
const resetBtn = document.getElementById("reset");
const list = document.getElementById("todo-list");

// Create event listeners
submitBtn.addEventListener("click", handleSubmit);
resetBtn.addEventListener("click", handleReset);
list.addEventListener("click", handleDelete);

// Define functions for event listeners
// Add To-Do list item to page
function handleSubmit(e) {
  if (!input.value) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = input.value;
  list.appendChild(item);
  input.value = "";
}

// Delete all items from to-do list
function handleReset(e) {
  for (let item of document.querySelectorAll("li")) {
    list.removeChild(item);
  }
}

// Delete To-do List Item
function handleDelete(e) {
  list.removeChild(e.target);
}
