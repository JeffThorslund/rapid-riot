import { sortByTitle } from "./prepareFestivalData";

describe("alphabetical title sorting", () => {
  test("titles are sorted alphabetically", () => {
    expect(sortByTitle("cat", "dog")).toBe(-1);
  });

  test("titles are identical", () => {
    expect(sortByTitle("cat", "cat")).toBe(0);
  });

  test("titles are not sorted alphabetically", () => {
    expect(sortByTitle("dat", "cog")).toBe(1);
  });
});
