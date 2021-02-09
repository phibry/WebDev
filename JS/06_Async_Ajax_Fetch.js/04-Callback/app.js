// Callback is a function thats passed into another function as a parameter.
// like forEach(function() {})
// set.timeout -> is asynchronous

// posts mimics our databse
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

// Function to get the poste form a db (here from posts)
function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Synchronous
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// This is synchronous, it takes 2s to the create the posts, while it takes 1 second to get them. With getPosts, only the two already existing posts will be displayed, while the third is still in the making
// createPost({ title: 'Post Three', body: 'This is post three' });
// getPosts();

// Asynchronous
// Insert a callback-function
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
