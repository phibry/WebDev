import { http } from './http';
import { ui } from './ui';

// Get posts on DOM loads
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add Post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

// Get Posts
function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

// Submit Post
function submitPost() {
  // Get value of the title-input field
  const title = document.querySelector('#title').value;

  // Get value of the body-input field
  const body = document.querySelector('#body').value;

  // Create object of the inputs
  const data = {
    title,
    body,
  };

  // Get value of the id-input field
  const id = document.querySelector('#id').value;

  // Validate inputfield are not empty
  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    // Check for id
    if (id === '') {
      // Create Post, POST REQUEST
      http
        .post('http://localhost:3000/posts', data)
        .then((data) => {
          ui.showAlert('Post added', 'alert alert-success');
          ui.clearFields();
          // call getPosts to update ui
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      // Update Post, PUT REQUEST
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then((data) => {
          ui.showAlert('Post updated', 'alert alert-success');
          ui.changeFormState('add');
          // call getPosts to update ui
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

// Delete Post
function deletePost(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;

    if (confirm('Are you sure?')) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
}

// Enable Edit State
function enableEdit(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body,
    };

    // Fill form with current post
    ui.fillForm(data);
  }
}

// Cancel Edit State
function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }

  e.preventDefault();
}
