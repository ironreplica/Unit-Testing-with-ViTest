import { validateStringNotEmpty } from "./validation";
import { validateNumber } from "./validation";
import { it, expect, describe } from "vitest";

// Validate string not empty
describe("validateStringNotEmpty()", () => {
  it("should throw an error if an empty string is passed", () => {
    const input = "";
    const result = () => {
      validateStringNotEmpty(input);
    };
    expect(result).toThrow();
  });
  it("should throw an error if a non string value is passed", () => {
    const input = 2;
    const result = () => {
      validateStringNotEmpty(input);
    };
    expect(result).toThrow(/value.trim is not a function/);
  });
  it("should throw an error if no arguments are passed", () => {
    const result = () => {
      validateStringNotEmpty();
    };
    expect(result).toThrow(/Cannot read properties of undefined/);
  });
});

// Validate Number checks
describe("validateNumber()", () => {
  it("should throw an error if a NaN value is passed", () => {
    const input = "1";
    const result = () => {
      validateNumber(input);
    };
    expect(result).toThrow(/Invalid number input./);
  });
});

// Left off at introducting test suites 0:00
