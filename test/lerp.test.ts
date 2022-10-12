import { expect, test } from "vitest";
import { lerp } from "../src/lerp.js";

test("lerp()", () => {
  expect(lerp(0, 100, 0.5)).toBe(50);
  expect(lerp(20, 80, 0)).toBe(20);
  expect(lerp(30, 5, 1)).toBe(5);
  expect(lerp(-1, 1, 0.5)).toBe(0);
  expect(lerp(0.5, 1, 0.5)).toBe(0.75);
});
