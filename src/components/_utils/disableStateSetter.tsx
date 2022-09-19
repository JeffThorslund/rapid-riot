import { ActiveIdStateMethods } from "./useActiveIndexState";

export const disableStateSetter = (methods: ActiveIdStateMethods) => {
  methods.set = () => undefined;
};
