import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in array", () => {
  // Arrange
  const numbers = [1, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((acm, num) => acm + num, 0);

  expect(result).toBe(expectedResult);
});

it("should yield NaN if a latest one invalid number is provided", () => {
  // Arrange
  const numbers = [1, "undefined"];

  // Act
  const result = add(numbers);

  // Assert
  // use the toBeNaN method

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  // Arrange
  const numbers = ["1", "2"];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.red;
});

it("should yield 0 if an empty array is provided", () => {
  // Arrange
  const numbers = [];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(0);
});

it("should throw and error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("should throw and error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow();
});
