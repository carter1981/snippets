'use strict';

const swap = (arr, from, to) => {
  const temp = arr[from];

  arr[from] = arr[to];
  arr[to] = temp;

  return arr;
};

// 2 loops - 1 from end, 1 from start. Comparing 2 sibling values to the right. Moving the greatest value to
// the right;

const bubbleSortUnopt = (arr) => {
  let count = 0;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      count++;
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }

  console.log('COUNT: ', count);
  return arr;
};

const bubbleSort = (arr) => {
  let count = 0;
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);

        count++;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  console.log('COUNT: ', count);
  return arr;
};

console.log(bubbleSortUnopt([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));



