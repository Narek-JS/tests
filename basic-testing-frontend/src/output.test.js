import { describe, expect, it } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
  it("should return a string, no matter which value is passed in", () => {
    // Arrange
    const value1 = 1;
    const value2 = "invalid";
    const value3 = false;

    // Act
    const result1 = generateResultText(value1);
    const result2 = generateResultText(value2);
    const result3 = generateResultText(value3);

    // Assert
    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("should return a string that contains the calculation result if a number is provided as a result", () => {
    // Arrange
    const result = 5;

    // Act
    const resultText = generateResultText(result);

    // Assert
    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    // Arrange
    const result = "no-calc";

    // Act
    const resultText = generateResultText(result);

    // Assert
    expect(resultText).toBe("");
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    // Arrange
    const result = "invalid";

    // Act
    const resultText = generateResultText(result);

    // Assert
    expect(resultText).toContain("Invalid");
  });
});
