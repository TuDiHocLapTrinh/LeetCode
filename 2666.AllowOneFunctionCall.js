/**
 * @param {Function} fn
 * @return {Function}
 */
let isCalled = false;

var once = function (fn) {
  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
console.log(onceFn(5, 6, 7)); // returns undefined without calling fn
