import { getFestivals } from "./index";

test("get markers", () => {
  expect(getFestivals()).toBeTruthy();
});

export {};
