// Singleton Object is an immediate anonymous funciton and can only return one instance of an object at a time

// Singleton -> Only one User can be created at one time
const Singleton = (function () {
  let instance;
  function createInstance() {
    const object = new Object({ name: 'Phil' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA);
console.log(instanceB);

// It's the same instnace, you can't have two of the same instance at the same time
console.log(instanceA === instanceB);
