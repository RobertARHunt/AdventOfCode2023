module.exports.part1 = (input) => {
  return input.reduce((acc, line) => acc + getCardScore(line), 0)
};

function getCardScore(card) {
  const winningCardNumbers = countWinningNumbers(card)
  if (winningCardNumbers != 0) {
    return Math.pow(2, (winningCardNumbers - 1));
  } else {
    return 0
  }
}

function countWinningNumbers(card) {
  const winningNumbers = card.split(':')[1].split(' | ')[0].match(/\d+/g)
  const cardNumbers = new Set(card.split(':')[1].split(' | ')[1].match(/\d+/g))
  const winningCardNumbers = winningNumbers.filter(winningNumber => cardNumbers.has(winningNumber))
  return winningCardNumbers.length
}

module.exports.part2 = (input) => {
  const cardCounts = input.map(_ => 1)
  input.forEach((card, ix) => {
    let winningCardNumbers = countWinningNumbers(card)
    const currentCardCount = cardCounts[ix]
    while (winningCardNumbers > 0) {
      winningCardNumbers--
      ix++
      cardCounts[ix] += currentCardCount
    }
  });
  return cardCounts.reduce((acc, count) => acc + count)
};