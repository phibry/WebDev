// Pull Things from the DOM
// DOM-Manipulation and Selectors

// document.getElementByID()
// Select things by their ID
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// CHANGE STYLING
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// If you want to delete something
// document.getElementById('task-title').style.display = 'none';

// CHANGE CONTENT
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// QUERY SELECTOR
// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// Always the first element: -> single element selectr
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// only the first odd element
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// only the first even element
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
