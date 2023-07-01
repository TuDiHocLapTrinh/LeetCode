function linear_search(list, target) {
  for (let number of list) {
    if (number === target) return list.indexOf(number);
  }
  return null;
}

function verify(index) {
  if (index) {
    console.log('Target found at: ' + index);
  } else {
    console.log('Target cant found');
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = linear_search(numbers, 5);
verify(result);
