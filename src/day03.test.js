const { test } = require("@jest/globals");
const { part1, part2 } = require("./day03");
const Input = require("./input");
const EXAMPLE_INPUT = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

test("Part 1 Example", () => {
  expect(part1(EXAMPLE_INPUT)).toBe(4361);
});

test("Part 1", () => {
  const input = new Input(3).fromLines().get();
  const newLocal = part1(input);
  expect(newLocal).toBe(536202);
});

test("Part 2 Example", () => {
  expect(part2(EXAMPLE_INPUT)).toBe(467835);
});

test("Part 2", () => {
  const input = new Input(3).fromLines().get();
  expect(part2(input)).toBe(78272573);
});