import { describe, it, expect } from "@jest/globals";
import sum from "~/sum";

describe("sum", () => {
  it("1 + 2", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
