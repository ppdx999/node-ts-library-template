import { add7 } from "../src/main.js";

it("adds 7", () => {
  expect(add7(1) as number).toBe(8);
});
