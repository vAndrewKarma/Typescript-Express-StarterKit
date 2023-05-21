import { describe, expect } from "@jest/globals";
import { add } from "../src/index";

describe("first test", () => {
  test("return value", () => {
    expect(add(1)).toBe(1);
  });
});
