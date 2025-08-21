import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number of type number", () => {
  // Arrange
  const value = "1";

  // Act
  const result = transformToNumber(value);

  // Assert
  expect(result).toBeTypeOf("number").toBe(1);
});

it("should yield NaN if an invalid string is provided", () => {
  // Arrange
  const invalidValue = "invalid";
  const invalidValue2 = undefined;
  const invalidValue3 = {};

  // Act
  const result = transformToNumber(invalidValue);
  const result2 = transformToNumber(invalidValue2);
  const result3 = transformToNumber(invalidValue3);

  // Assert
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
  expect(result3).toBeNaN();
});

it("should yield 0 if empty string is provided", () => {
  // Arrange
  const value = "";

  // Act
  const result = transformToNumber(value);

  // Assert
  expect(result).toBe(0);
});

it("should throw an error if a value is Symbol", () => {
  // Arrange
  const value = Symbol("test");

  // Act
  const resultFn = () => {
    transformToNumber(value);
  };

  // Assert
  expect(resultFn).toThrow(/Symbol value to a number/);
});

it("should throw an error if a value is Bigint", () => {
  // Arrange
  const value = BigInt(123);

  // Act
  const resultFn = () => {
    transformToNumber(value);
  };

  // Assert
  expect(resultFn).toThrow(/BigInt value to a number/);
});
