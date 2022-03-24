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
    let connectedCities = map[i];
    let queue = [connectedCities];
    let groupConnectedCities = [];
    let groupConnectedCitiesIndex = 0;
    while (queue.length > 0) {
      let processConnectedCities = queue.pop();
      for (let connCity of processConnectedCities) {
        if (isVisited[connCity]) {
          continue;
        }
        groupConnectedCities[groupConnectedCitiesIndex] = connCity;
        isVisited[connCity] = true;
        queue.push(map[connCity]);
        groupConnectedCitiesIndex++;
      }
    }
    connectedGroups.push(groupConnectedCities);
  }

  let total = 0;
  for (let group of connectedGroups) {
    total += c_lib + c_road * group.length;
  }
  return total;
}
