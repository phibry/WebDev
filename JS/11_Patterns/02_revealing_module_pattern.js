// REVEALING MODULE PATTERN
// Map object literal to private functions to reveal
// you can reveal certain methods from a module

// like a databased controler
const ItemCtrl = (function () {
  let data = [];

  // Privat
  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  // Privat
  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  // Return an object Literal
  // -> Reveal the methods above
  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Marj' });
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
