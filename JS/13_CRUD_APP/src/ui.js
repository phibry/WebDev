class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.formState = 'add';
  }

  // Show Post in UI
  showPosts(posts) {
    // console.log(posts);
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fas fa-edit"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    // Add posts to the page
    this.post.innerHTML = output;
  }

  // Show Alert after new post added
  showAlert(message, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement('div');

    // Add Classes
    div.className = className;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Insert div
    // Get parent
    const container = document.querySelector('.postsContainer');

    // Get Posts
    const posts = document.querySelector('#posts');

    // Insert alert div
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    // If there is an alert
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear the fields after new post added
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  // Clear hidden ID value in from the edit state
  clearIdInput() {
    this.idInput.value = '';
  }

  // Change the form state
  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.classList.add('btn-warning');

      // Create cancel button
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      // Get parent to which the button will be inserted
      const cardForm = document.querySelector('.card-form');

      // Get element to insert before (hidden span in html)
      const formEnd = document.querySelector('.form-end');

      // Insert cancel button
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.classList.remove('btn-warning');

      // Remove cancel btn if it is there
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      // Clear ID from the hidden field
      this.clearIdInput();

      // Clear textfields
      this.clearFields();
    }
  }
}

export const ui = new UI();
