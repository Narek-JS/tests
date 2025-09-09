import { describe, expect, it } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return array of number value if an array of string number values is provided", () => {
    // Arrange
    const numberValues = ["1", "2"];

    // Act
    const cleanedNumbers = cleanNumbers(numberValues);

    // Assert
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    // Arrange
    const numberValues = ["", 2];

    // Act
    const resultFn = () => cleanNumbers(numberValues);

    // Assert
    expect(resultFn).toThrow(/Invalid input/);
  });
});
