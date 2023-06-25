/**
 *  Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
 *  The three functions are:
 *      - increment() increases the current value by 1 and then returns it.
 *      - decrement() reduces the current value by 1 and then returns it.
 *      - reset() sets the current value to init and then returns it.
 */

function Counter(init) {
  this.count = init;

  this.increment = function () {
    return ++this.count;
  };
  this.decrement = function () {
    return --this.count;
  };
  this.reset = function () {
    this.count = init;
    return this.count;
  };
}

var createCounter = function (init) {
  return new Counter(init);
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
