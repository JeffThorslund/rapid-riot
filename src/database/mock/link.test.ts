import {
  getRandomLink,
  createSecondLevelDomain,
  appendSubdomainAndTopLevelDomain,
} from "./link";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.123);
});

test("create second level domain", () => {
  expect(createSecondLevelDomain()).toBe("nbt36");
});

test("append prefix and suffix", () => {
  expect(appendSubdomainAndTopLevelDomain("nbt36")).toBe("www.nbt36.com");
});

test("random link", () => {
  expect(getRandomLink()).toBe("www.nbt36.com");
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});
