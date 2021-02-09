// BOOK CLASS
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI CLASS
class UI {
  // UI methods
  addBookToList(book) {
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
  }

  showAlert(msg, className) {
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
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();

      // instantiate ui
      const ui = new UI();
      // show message
      ui.showAlert('Book Removed!', 'success');
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// LOCAL STORAGE CLASS
class Store {
  // Fetch them from local storage
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI();

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM LOAD EVENT
document.addEventListener('DOMContentLoaded', Store.displayBooks());

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

  console.log(ui);

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // add book to list
    ui.addBookToList(book);

    // Add to LS
    // no instantiation -> is a static method
    Store.addBook(book);

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

  // Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // show message
  // ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});
