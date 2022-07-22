'use strict';

// Start by picking the the second element in the array.
// Compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order,
// iterate through the sorted portion (i.e the left side) to place
// the element in the correct place.
// Repeat until sorted.

const insertionSort = (arr) => {
  let currentVal;

  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];

    let j = i - 1;
    for (; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
};

console.log(insertionSort([1, 2, 87, 90, 30, 14, 15]));
