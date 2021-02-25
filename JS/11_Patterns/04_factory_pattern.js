// pattern -> method
// Way of creating an interface for creating objcets, but we can let subclasses define which classes to instantiate

// Factoy MEthods -> Application to manage/maintain/manipulate collections of objects that are different but at the same time have many common characteristics

// e.g. a Member, different types of Abos with different accesses
class MemberFactory {
  constructor() {
    this.createMember = function (name, type) {
      let member;

      switch (type) {
        case 'simple':
          member = new SimpleMembership(name);
          break;
        case 'standard':
          member = new StandardMembership(name);
          break;
        case 'super':
          member = new SuperMembership(name);
          break;
      }

      member.type = type;

      member.define = function () {
        console.log(`${this.name} (${this.type}): ${this.cost}`);
      };
      return member;
    };
  }
}

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$5';
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$15';
  }
}

class SuperMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$25';
  }
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Phil Rieser', 'standard'));
members.push(factory.createMember('Tanja Maurer', 'super'));
members.push(factory.createMember('Felix Lobrecht', 'simple'));

members.forEach((member) => {
  member.define();
});
