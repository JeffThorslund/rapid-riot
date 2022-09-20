import { ActiveIdStateMethods } from "./useActiveIndexState";
import { disableStateSetter } from "./disableStateSetter";

test("method is not disabled", () => {
  const stateMethods: ActiveIdStateMethods = {
    value: undefined,
    set: (value) => value,
    isActive: () => false,
    reset: () => undefined,
  };

  expect(stateMethods.set("test string")).toBe("test string");
});

test("method is disabled", () => {
  const stateMethods: ActiveIdStateMethods = {
    value: undefined,
    set: (value) => value,
    isActive: () => false,
    reset: () => undefined,
  };

  disableStateSetter(stateMethods);

  expect(stateMethods.set("test string")).toBe(undefined);
});
