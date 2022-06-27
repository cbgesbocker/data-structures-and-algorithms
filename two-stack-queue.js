function processData(input) {
  input = input.split("\n");

  let queue = [];
  let queries = +input.shift();
  let pointer = 0;
  while (pointer < queries) {
    let query = input.shift();
    let split = query.split(" ");
    let queryArg = split[0];
    let paramArg = split[1];
    if (queryArg === "3") {
      console.log(queue[0] || "no val");
    }
    if (queryArg == "2") {
      queue.shift();
    }
    if (queryArg === "1") {
      queue[queue.length] = paramArg;
    }
    pointer++;
  }
}