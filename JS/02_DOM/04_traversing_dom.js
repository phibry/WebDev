let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes: Nodelist
val = list.childNodes; // text = line breaks
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// get children element nodes: HTMLCollection
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild; // again text nodes = line break
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
// there is no prev sibling. listItem ist the first

console.log(val);
