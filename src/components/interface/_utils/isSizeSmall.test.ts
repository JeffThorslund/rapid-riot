import { isSizeSmall } from "./isSizeSmall";

test("size is small", () => {
  expect(isSizeSmall("small")).toBeTruthy();
});

test("size is not small", () => {
  expect(isSizeSmall("large")).toBeFalsy();
});
