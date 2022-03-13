// console.log = () => null;

function swap(array, indexOne, indexTwo) {
  let value = array[indexOne];
  let valueTwo = array[indexTwo];
  array[indexTwo] = value;
  array[indexOne] = valueTwo;
  return array;
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let minimumSwaps = 0;
  let isVisited = new Array(arr.length).fill(false, 1, arr.length + 1);

  // create a friendly map to store the data
  // [ 1, 4, 3, 2 ]
  // { 1 -> 1, 2 -> 4, 3 -> 3, 4 -> 2 }
  let map = new Map();
  for (let i = 1; i <= arr.length; i++) {
    map.set(i, arr[i - 1]);
  }

  // [ 1, 4, 3, 2 ]
  for (let i = 1; i <= arr.length; i++) {
    if (isVisited[i] === true) {
      continue;
    }
    let node = map.get(i);
    isVisited[i] = true;

    if (node === i) {
      continue;
    } else {
      while (!isVisited[node]) {
        isVisited[node] = true;
        let nextNode = map.get(node); // 2
        arr = swap(arr, node - 1, nextNode - 1);
        node = nextNode;
        minimumSwaps++;
      }
    }
  }
  console.log("sorted", arr);

  return minimumSwaps;
}

// Complete the minimumSwaps function below.
function minimumSwapsNoMap(arr) {
  let minimumSwaps = 0;
  let isVisited = new Array(arr.length).fill(false, 1, arr.length + 1);

  // [ 1, 4, 3, 2 ]
  for (let i = 1; i <= arr.length; i++) {
    if (isVisited[i] === true) {
      continue;
    }

    let pointer = i - 1;
    isVisited[i] = true;

    let currentIndexValue = arr[pointer];

    if (currentIndexValue === i) {
      // 1 -> in first spot
      continue;
    } else {
      // while current value hasn't been visited
      // swap it with the value at the index - 1 of
      // the value in this position
      while (!isVisited[currentIndexValue]) {
        // store
        isVisited[currentIndexValue] = true;

        // current value placement in array
        let arrayPlacement = currentIndexValue - 1;

        // get value at index
        let valueAtIndex = arr[placement];

        arr = swap(arr, pointer, arrayPlacement);
        currentIndexValue = valueAtIndex;
        minimumSwaps++;
      }
    }
  }
  console.log("sorted", arr);
  return minimumSwaps;
}

// console.info("Should be 3", minimumSwapsNoMap([4, 3, 1, 2]));
console.info("Should be 3", minimumSwapsNoMap([2, 3, 4, 1, 5]));
console.info("Should be 3", minimumSwapsNoMap([1, 3, 5, 2, 4, 6, 7]));
console.info("Should be 1", minimumSwapsNoMap([1, 4, 3, 2]));
console.info("Should be 9", minimumSwapsNoMap([3, 7, 6, 9, 1, 8, 10, 4, 2, 5]));
console.info(
  "Should be 46",
  minimumSwapsNoMap([
    2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33,
    50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28,
    36, 30, 37, 35, 20, 17, 45, 43, 25, 19,
  ])
);
