import { it, expect, should } from "vitest";
import { transformToNumber } from "./numbers";
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
// it("should throw an error if no value is passed into the function", () => {
//   const resultFn = () => {
//     transformToNumber();
//   };
//   expect(resultFn).toThrow();
// });
// it("should throw an error when provided with multiple args", () => {
//   const input1 = 1;
//   const input2 = 2;
//   const result = () => {
//     transformToNumber(input1, input2);
//   };
//   expect(result).toThrow();
// });
