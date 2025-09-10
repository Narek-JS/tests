import { expect, it, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});
vi.mock("fs");

it("should return a promise that resolves to no value if called correctly", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
