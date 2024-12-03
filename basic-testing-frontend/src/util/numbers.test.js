import { it, expect, should, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";
describe("transformToNumber()", () => {
  it("should transform a string number to a number of type number", () => {
    const input = "12";

    const expectedResult = 12;

    const result = transformToNumber(input);

    expect(result).toBe(expectedResult);
  });
  it("should produce an NaN when non-transformable values are passed", () => {
    const inputStr = "invalid";
    const input2 = {};

    const result = transformToNumber(inputStr);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN(/NaN/);
    expect(result2).toBeNaN(/NaN/);
  });
});
describe("cleanNumbers()", () => {
  // Integration test
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];
    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual([1, 2]);
  });
  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];
    const cleanFn = () => {
      cleanNumbers(numberValues);
    };
    expect(cleanFn).toThrow();
  });
});
