document.querySelector('.clear-tasks').addEventListener('click', function (e) {
  console.log('hello world');

  e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  console.log('Clicked');

  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hellorino';

  // Event type
  val = e.type;

  // Timespamt
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  // Important
  val = e.target;

  console.log(val);
}
