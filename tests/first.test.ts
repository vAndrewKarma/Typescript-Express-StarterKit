import { describe, expect } from "@jest/globals";
import { return_value } from "../src/app";

describe("first test", () => {
  test("return value", () => {
    expect(return_value(1)).toBe(1);
  });
});
