import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should throw an error if the string is empty", () => {
    // Arrange
    const value = "  ";

    // Act
    const resultFn = () => {
      validateStringNotEmpty(value);
    };

    // Assert
    expect(resultFn).toThrow(/must not be empty/);
  });

  it("should not throw an error if the string is not empty", () => {
    // Arrange
    const value = " any string ";

    // Act
    const resultFn = () => {
      validateStringNotEmpty(value);
    };

    // Assert
    expect(resultFn).not.toThrow();
  });

  it("should throw an error if the value is not string", () => {
    // Arrange
    const value = 11;
    const value2 = undefined;
    const value3 = {};
    const value4 = [];
    const value5 = null;

    // Act
    const resultFn = () => validateStringNotEmpty(value);
    const resultFn2 = () => validateStringNotEmpty(value2);
    const resultFn3 = () => validateStringNotEmpty(value3);
    const resultFn4 = () => validateStringNotEmpty(value4);
    const resultFn5 = () => validateStringNotEmpty(value5);

    // Assert
    expect(resultFn).toThrow(/is not a function/);
    expect(resultFn2).toThrow(/Cannot read properties of undefined/);
    expect(resultFn3).toThrow(/is not a function/);
    expect(resultFn4).toThrow(/is not a function/);
    expect(resultFn5).toThrow(/Cannot read properties of null/);
  });
});

describe("validateNumber()", () => {
  it("should Throw an error if value is not a number", () => {
    // Arrange
    const value = NaN;

    // Act
    const resultFn = () => validateNumber(value);

    // Assert
    expect(resultFn).toThrow(/Invalid number input/);
  });
});
