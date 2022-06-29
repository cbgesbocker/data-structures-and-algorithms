// https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues

function processData(input) {
  input = input.split("\n");

  let stackDelete = [];
  let stackPush = [];
  let queries = +input.shift();
  let pointer = 0;
  while (pointer < queries) {
    let query = input.shift();
    let split = query.split(" ");
    let queryArg = split[0];
    let paramArg = split[1];

    if (queryArg === "1") {
      stackPush.push(paramArg);
    }
    if (queryArg == "2") {
      while (stackPush.length) {
        stackDelete.push(stackPush.pop());
      }
      stackDelete.pop();
    }
    if (queryArg === "3") {
      while (stackDelete.length) {
        stackDelete.push(stackPush.pop());
      }
      console.log(stackDelete[0]);
    }

    pointer++;
  }
}
