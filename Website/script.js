const settingsBtn = document.getElementById("settings-btn");
const modal = document.getElementById("settings-modal");
const saveBtn = document.getElementById("save-btn");
const modeSelect = document.getElementById("mode-select");

// Open the modal when the settings button is clicked
settingsBtn.addEventListener("click", () => {modal.style.display = "block";
});

// Save the selected mode and apply it to the website
saveBtn.addEventListener("click", () => {
const selectedMode = modeSelect.value;

if (selectedMode === "dark") {
document.body.classList.add("dark-mode");
} else {
document.body.classList.remove("dark-mode");
}

modal.style.display = "none";
});
// Get references to HTML elements
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// Listen for form submission
commentForm.addEventListener('submit', event => {
  event.preventDefault();

  // Get values from form inputs
  const name = commentForm.elements['name'].value;
  const comment = commentForm.elements['comment'].value;

  // Create a new comment element
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `
    <h3>${name}</h3>
    <p>${comment}</p>
  `;

  // Add the new comment to the comment list
  commentList.appendChild(newComment);

  // Clear the form inputs
  commentForm.reset();
});
