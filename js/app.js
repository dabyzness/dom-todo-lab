// Create Cached Element References
// const input = document.getElementById("todo-input");
// const submitBtn = document.getElementById("submit-button");
const resetBtn = document.getElementById("reset");
const list = document.getElementById("todo-list");
const form = document.querySelector("form");

// Create event listeners
// submitBtn.addEventListener("click", handleSubmit);
resetBtn.addEventListener("click", handleReset);
list.addEventListener("click", handleDelete);
form.addEventListener("submit", handleForm);

// Define functions for event listeners
// Add To-Do list item to page
// function handleSubmit(e) {
//   console.log(e);
//   if (!input.value) {
//     return;
//   }

//   const item = document.createElement("li");
//   item.textContent = input.value;
//   list.appendChild(item);
//   input.value = "";
// }

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

// Handle form data submission
function handleForm(e) {
  e.preventDefault();
  if (!e.target[0].value) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = e.target[0].value;
  list.appendChild(item);
  e.target[0].value = "";
}
