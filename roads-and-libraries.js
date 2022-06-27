"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'roadsAndLibraries' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c_lib
 *  3. INTEGER c_road
 *  4. 2D_INTEGER_ARRAY cities
 */

function roadsAndLibrariesV2(n, c_lib, c_road, cities) {
  if (c_lib <= c_road) {
    return n * c_lib;
  }

  let map = {};
  for (let i = 1; i < n + 1; i++) {
    map[i] = map[i] || [];
    let connection = cities[i - 1];
    if (!connection) {
      continue;
    }
    let cityOne = connection[0];
    let cityTwo = connection[1];
    map[cityOne] = map[cityOne] || [];
    map[cityTwo] = map[cityTwo] || [];
    map[cityOne].push(cityTwo);
    map[cityTwo].push(cityOne);
  }
}

function roadsAndLibraries(n, c_lib, c_road, cities) {
  if (c_lib <= c_road) {
    return n * c_lib;
  }

  let map = {};
  for (let i = 1; i < n + 1; i++) {
    map[i] = map[i] || [];
    let connection = cities[i - 1];
    if (!connection) {
      continue;
    }
    let cityOne = connection[0];
    let cityTwo = connection[1];
    map[cityOne] = map[cityOne] || [];
    map[cityTwo] = map[cityTwo] || [];
    map[cityOne].push(cityTwo);
    map[cityTwo].push(cityOne);
  }

  let connectedGroups = [];
  let isVisited = {};
  for (let i in map) {
    if (i in isVisited) {
      continue;
    }
    isVisited[i] = true;
    let groupConnectedCities = [+i];
    let queue = [map[i]];
    while (queue.length > 0) {
      let processConnectedCities = queue.pop();
      for (let connCity of processConnectedCities) {
        if (connCity in isVisited) {
          continue;
        }
        groupConnectedCities.push(connCity);
        isVisited[connCity] = true;
        queue.push(map[connCity]);
      }
    }
    connectedGroups.push(groupConnectedCities);
  }
  let total = 0;
  for (let group of connectedGroups) {
    let numRoads = group.length;
    total += c_lib + c_road * (numRoads - 1);
  }
  return total;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const c_lib = parseInt(firstMultipleInput[2], 10);

    const c_road = parseInt(firstMultipleInput[3], 10);

    let cities = Array(m);

    for (let i = 0; i < m; i++) {
      cities[i] = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((citiesTemp) => parseInt(citiesTemp, 10));
    }

    const result = roadsAndLibraries(n, c_lib, c_road, cities);

    ws.write(result + "\n");
  }

  ws.end();
}
