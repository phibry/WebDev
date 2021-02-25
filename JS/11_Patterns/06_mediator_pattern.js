// Behaviour pattern like the observer
// Having an mediator for :
// Interface for communicating with what are called colleagues, which are mediated objects
// -> Chatroom

class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  // Class-Methods
  get getUser() {
    return this.name;
  }

  setChatroom(chatroom) {
    this.chatroom = chatroom;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// Mediator
class Chatroom {
  constructor() {
    this.users = {};
  }

  // Mediator-Methods
  register(user) {
    this.users[user.getUser] = user;
    user.setChatroom(this);
  }

  send(message, from, to) {
    if (to) {
      // Single user message
      to.receive(message, from);
    } else {
      // Mass message to all users
      for (let userName in this.users) {
        if (userName !== from.getUser) {
          this.users[userName].receive(message, from);
        }
      }
    }
  }
}

// Create Users
const phil = new User('Phil');
const t = new User('Tanja');
const felix = new User('Felix');

// Create a chatroom
const chatroom = new Chatroom();

// register Users
chatroom.register(phil);
chatroom.register(felix);
chatroom.register(t);

phil.send('Hello Tanja', t);
t.send('Hello Felix', felix);
felix.send('Hello everyone');
