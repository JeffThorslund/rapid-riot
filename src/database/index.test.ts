import { getMarkers } from "./index";

test("get markers", () => {
  expect(getMarkers()).toStrictEqual([{ coordinates: [-74.006, 40.7128] }]);
});

export {};
