const recursive_binary_search = (list, target, start = 0, end = null) => {
  if (end === null) end = list.length - 1;
  if (start > end) return -1;

  let mid = start + Math.floor((end - start) / 2);

  if (target === list[mid]) {
    return mid;
  } else {
    if (target < list[mid]) {
      return recursive_binary_search(list, target, start, mid - 1);
    } else {
      return recursive_binary_search(list, target, mid + 1, end);
    }
  }
};

console.log(recursive_binary_search([1, 2, 3, 4], 3, 0, 3));
