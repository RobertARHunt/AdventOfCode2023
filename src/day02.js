module.exports.part1 = (input) => {
  return input.reduce((acc, line) => {
    const gameID = Number(line.split(":")[0].split(" ")[1])
    const cubeSets = line.split(": ")[1].split("; ")
    if (cubeSets.every(validateCubeSet)) {
      return acc + gameID
    }
    return acc
  }, 0)
}

function validateCubeSet(cubeSet) {
  const colourSets = cubeSet.split(", ").map(s => s.split(" "))
  const colourLimit = {
    red: 12,
    green: 13,
    blue: 14,
  }
  return colourSets.every(set => set[0] <= colourLimit[set[1]])
}

module.exports.part2 = (input) => {
  return input.reduce((acc, line) => {
    const cubeSets = line.split(": ")[1].split("; ")

    const minSet = cubeSets.reduce((acc, cubeSet) => {
      const colourSets = cubeSet.split(", ").map(s => s.split(" "))
      colourSets.forEach(set => {
        if (Number(set[0]) > acc[set[1]]) acc[set[1]] = Number(set[0])
      });
      return acc
    }, { red: 0, green: 0, blue: 0 })
    const power = minSet.red * minSet.green * minSet.blue
    return acc + power
  }, 0)
}
