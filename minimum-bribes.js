function swap(array, indexOne, indexTwo) {
  let value = array[indexOne];
  let valueTwo = array[indexTwo];
  array[indexTwo] = value;
  array[indexOne] = valueTwo;
  return array;
}

function minimumBribes(q) {
  let index = 0;
  let bribes = new Array(q.length).fill(0, 0, q.length);
  var numBribes = 0;
  while (index < q.length) {
    let currentIndex = index;

    // while we have a bribing user,
    // move them backwards and count their bribes
    while (
      q[currentIndex + 1] !== undefined &&
      q[currentIndex] > q[currentIndex + 1]
    ) {
      const bribingUser = q[currentIndex];
      q = swap(q, currentIndex, currentIndex + 1);
      bribes[bribingUser - 1]++;
      numBribes++;
      currentIndex--;
    }

    index++;
  }
  const tooChoatic = bribes.find((bribeCount) => bribeCount > 2);
  console.log(tooChoatic ? "Too chaotic" : numBribes);
}
