import { festivals } from "./index";

test("verify number of festivals", () => {
  expect(festivals.length).toBe(17);
});

describe.each(festivals)("iterative data validation", (festival) => {
  describe(`${festival.title}`, () => {
    test(`coordinates are within accepted range`, () => {
      expect(festival.location.coordinates.lat).toBeGreaterThanOrEqual(-90);
      expect(festival.location.coordinates.lat).toBeLessThanOrEqual(90);
      expect(festival.location.coordinates.lng).toBeGreaterThanOrEqual(-180);
      expect(festival.location.coordinates.lng).toBeLessThanOrEqual(180);
    });

    test("festivals have valid links", () => {
      expect(festival.link).toMatch(/^(ftp|http|https):\/\/[^ "]+$/);
    });
  });
});
