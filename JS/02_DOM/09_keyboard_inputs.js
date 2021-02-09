const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// submit
// form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);

// copy
// taskInput.addEventListener('copy', runEvent);

// Input
// taskInput.addEventListener('input', runEvent);

// Change
select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`EVENT Type: ${e.type}`);

  console.log(e.target.value);

  heading.innerText = e.target.value;

  // get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}
