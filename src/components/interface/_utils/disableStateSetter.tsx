import { ActiveIdStateMethods } from "../../_utils/useActiveIndexState";

export const disableStateSetter = (methods: ActiveIdStateMethods) => {
  methods.set = () => undefined;
};
