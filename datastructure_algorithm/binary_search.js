function binary_search(list, target) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    const midpoint = first + Math.floor((last - first) / 2);
    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else if (list[midpoint] > target) {
      last = midpoint - 1;
    }
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

const result = binary_search(numbers, 5);
verify(result);
