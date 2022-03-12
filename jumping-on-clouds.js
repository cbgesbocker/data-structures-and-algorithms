const logger = (index, ...args) => {
  if (index > 50) {
    console.log(...args);
  }
};
function jumpingOnClouds(c) {
  if (c.length < 2 || c.length > 100) {
    throw new Error("out of range");
  }

  let jumpCount = 0;
  let index = 0;

  while (index < c.length - 1) {
    let pointer = index;
    let maxJumps = 2;

    // console.log(
    //   "\n\nPointer start: ",
    //   pointer,
    //   "\nValue",
    //   c[pointer],
    //   "\nJumpCount",
    //   jumpCount
    // );
    // 0 1 0 1 0 0
    while (c[pointer] === 1 || c[pointer + 1] === 1) {
      pointer += c[pointer] === 1 ? 1 : 2;
      if (c[pointer] === undefined || pointer === c.length - 1) {
        break;
      }
      jumpCount++;
    }

    while (c[pointer] === 0 && maxJumps > 0) {
      pointer++;
      maxJumps--;
    }
    jumpCount++;

    // first jump
    // console.log(
    //   "Pointer end: ",
    //   pointer,
    //   "\nValue",
    //   c[pointer],
    //   "\nJumpCount:",
    //   jumpCount
    // );

    index = pointer;
  }
  return jumpCount;
}

console.log(
  "output should be 6",
  jumpingOnClouds([0, 0, 1, 0, 0, 0, 0, 1, 0, 0])
);
console.log("output should be 3", jumpingOnClouds([0, 0, 0, 1, 0, 0]));
console.log("output should be 4", jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(
  "output should be 28",
  jumpingOnClouds([
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
    0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0,
  ])
);
console.log(
  "output should be 53",
  JSON.stringify({
    data: jumpingOnClouds([
      0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0,
      0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    ]),
  })
);

// [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
// [0, 0, 0, 1, 0, 0]
// [ 0, 0, 1, 0, 0, 1, 0 ]
//[ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0 ]

// [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,]
