import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";
import React from "react";
import { ActionIconSchema } from "../actionBar/_utils/actionIconSchema";

interface Props {
  modalState: ActiveIndexStateMethods;
  actionIconSchema: ActionIconSchema[];
}

export const FeedbackModal = (props: Props) => {
  if (props.modalState.value === undefined) return null;

  return (
    <React.Fragment>
      {props.actionIconSchema[props.modalState.value].form(
        props.modalState.reset
      )}
    </React.Fragment>
  );
};
