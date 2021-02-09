// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI CONSTRUCTOR
function UI() {}

// ADD TO BOOK LIST FUNCTION
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>`;

  list.appendChild(row);

  // console.log(row);
};

// SHOW ALERT
UI.prototype.showAlert = function (msg, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(msg));
  // Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3s
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
};

// DELETE BOOK
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();

    // instantiate ui
    const ui = new UI();
    // show message
    ui.showAlert('Book Removed!', 'success');
  }
};

// Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// EVENT LISTENER FOR ADD
document.getElementById('book-form').addEventListener('submit', function (e) {
  // get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // instantiate book
  const book = new Book(title, author, isbn);

  // instantiate ui
  const ui = new UI();

  // console.log(ui);

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');

    // clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

// EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener('click', function (e) {
  // instantiate ui
  const ui = new UI();

  // call delete function
  ui.deleteBook(e.target);

  // show message
  // ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});
