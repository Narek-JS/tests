import { describe, expect, it } from "vitest";
import { generateToken } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    // Arrange
    const userEmail = "test@test.com";

    // Act
    generateToken(userEmail, (error, token) => {
      // Assert
      expect(token).toBeDefined(2);
      done();
    });
  });
});
