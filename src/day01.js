module.exports.part1 = (input) => {
  return input.reduce((acc, line) => {
    const digits = line.match(/\d/g)
    return acc + Number(digits[0] + digits.at(-1))
  }, 0);
}

module.exports.part2 = (input) => {
  const digitMap = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  }
  return input.reduce((acc, line) => {
    const digits =
      [...line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)]

    const firstDigit = digitMap[digits[0][1]]
    const lastDigit = digitMap[digits.at(-1)[1]]
    return acc + (firstDigit * 10 + lastDigit)
  }, 0);
}
