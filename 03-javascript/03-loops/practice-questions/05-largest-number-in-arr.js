// Qs5. Find the largest number in an array with only positive numbers.

function findLargest(arr) {
  if (arr.length == 0) {
    return null;
  } else if (arr.length == 1) {
    return arr[0];
  }

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([54, 23, 90, 31, 100]));
console.log(findLargest([7]));
console.log(findLargest([]));
