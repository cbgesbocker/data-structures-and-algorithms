function swap(arr: any[], indexOne: number, indexTwo: number) {
  let value = arr[indexOne];
  let valueTwo = arr[indexTwo];
  arr[indexTwo] = value;
  arr[indexOne] = valueTwo;
  return arr;
}

function compareValues({
  valueOne,
  valueTwo,
}: {
  valueOne: string;
  valueTwo: string;
}) {
  if (valueOne === valueTwo) {
    return 0;
  }
  return +valueOne > +valueTwo ? -1 : 1;
}

function compareNames({
  nameOne,
  nameTwo,
}: {
  nameOne: string;
  nameTwo: string;
}) {
  return nameOne.localeCompare(nameTwo);
}

let inputLines = [
  "5",
  "amy 100",
  "david 100",
  "heraldo 50",
  "aakansha 75",
  "aleksa 150",
];
function main() {
  // Enter your code here
  inputLines = inputLines.slice(1);

  // O (n ^ 2)
  let namesArray = [];
  namesArray.forEach((v: string, i: number) =>
    console.log(`${namesArray[i]} ${valuesArray[i]}`)
  );
}

main();

// aleksa 150
// amy 100
// david 100
// aakansha 75
// heraldo 50
