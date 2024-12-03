import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];
  const expectedResult = 3;
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const strNumbers = ["1", "2"];
  const result = add(strNumbers);

  const expectedResult = strNumbers.reduce((prev, cur) => +prev + +cur, 0);
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an enmpty array is provided", () => {
  const emptyArr = [];

  const result = add(emptyArr);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple args instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };
  // Checking for specific error
  expect(resultFn).toThrow(/is not iterable/);
});
