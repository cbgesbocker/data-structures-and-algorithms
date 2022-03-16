let inputLines = [
  "5",
  "amy 100",
  "david 100",
  "heraldo 50",
  "aakansha 75",
  "aleksa 150",
];

main();

function swap(array: any[], indexOne: number, indexTwo: number) {
  let value = array[indexOne];
  let valueTwo = array[indexTwo];
  array[indexTwo] = value;
  array[indexOne] = valueTwo;
  return array;
}

function compare(obj: string[], obj2: string[]) {
  let nameOne = obj[0];
  let nameTwo = obj2[0];
  let valueOne = +obj[1];
  let valueTwo = +obj2[1];

  if (nameOne === nameTwo) {
    if (valueOne === valueTwo) return 0;
    return valueOne < valueTwo ? -1 : 1;
  }
  return nameOne.localeCompare(nameTwo);
}

function main() {
  // Enter your code here
  inputLines = inputLines.slice(1);

  for (let i = 0; i < inputLines.length; i++) {
    for (let j = i + 1; j < inputLines.length; j++) {
      let value = inputLines[i].split(" ");
      let comp = inputLines[j].split(" ");
      let result = compare(value, comp);
      if (result === 1) {
        inputLines = swap(inputLines, i, j);
      }
    }
  }
  inputLines.forEach((i) => console.log(i));
}
// aleksa 150
// amy 100
// david 100
// aakansha 75
// heraldo 50
