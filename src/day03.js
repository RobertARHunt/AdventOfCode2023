module.exports.part1 = (input) => {
  const symbolLocations = {}
  const partNumbers = []

  input.forEach((line, y) => {
    //symbols
    for (match of line.matchAll(/[^\d\.]/g)) {
      symbolLocations[y * 1000 + match.index] = match[0]
    }
    //part numbers
    for (match of line.matchAll(/\d+/g)) {
      partNumbers.push(newPotentialPartNumber(match[0], match.index, y))
    }
  });

  return partNumbers
    .filter(partNumber => partNumber.surroundings.some(coord => symbolLocations.hasOwnProperty(coord)))
    .reduce((acc, partNumber) => acc + partNumber.number, 0)
};

function newPotentialPartNumber(num, x, y) {

  const coords = new Set(num.split("").map((_, ix) => y * 1000 + x + ix))

  return {
    number: Number(num),
    coords,
    surroundings: getSurroundingCoords(coords)
  }
}

function getSurroundingCoords(coords) {
  const surroundings = [];
  coords.forEach(coord => {
    surroundings.push(coord - 1, coord - 1001, coord - 1000, coord - 999, coord + 1, coord + 999, coord + 1000, coord + 1001)
  })
  return [...new Set(surroundings)]
}

module.exports.part2 = (input) => {
  const gearLocations = {}
  const partNumbers = []
  input.forEach((line, y) => {
    //symbols
    for (match of line.matchAll(/\*/g)) {
      gearLocations[y * 1000 + match.index] = []
    }
    //part numbers
    for (match of line.matchAll(/\d+/g)) {
      partNumbers.push(newPotentialPartNumber(match[0], match.index, y))
    }
  });
  partNumbers.forEach(partNumber => {
    partNumber.surroundings
      .filter(coord => gearLocations.hasOwnProperty(coord))
      .forEach(coord => gearLocations[coord].push(partNumber.number))
  })
  return Object.values(gearLocations).reduce((acc, partNumbers) => {
    if (partNumbers.length == 2) return acc + partNumbers[0] * partNumbers[1]
    else return acc
  }, 0)
};