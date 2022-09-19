import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";
import React from "react";
import { actionIconSchema } from "../actionBar/actionIconSchema";

interface Props {
  modalState: ActiveIndexStateMethods;
}

export const FeedbackModal = (props: Props) => {
  if (props.modalState.value === undefined) return null;

  return (
    <React.Fragment>
      {actionIconSchema[props.modalState.value].form(props.modalState)}
    </React.Fragment>
  );
};
