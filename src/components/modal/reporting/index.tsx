import { TextArea } from "grommet";
import React, { useState } from "react";
import { ActiveIndexStateMethods } from "../../_utils/useActiveIndexState";
import { Modal } from "../Modal";
import { FormItemWrapper } from "../FormItemWrapper";

export function ReportingForm(props: { modalState: ActiveIndexStateMethods }) {
  if (props.modalState.value === undefined) return null;

  const [state, setState] = useState("");

  return (
    <Modal
      closeModal={props.modalState.reset}
      submitForm={async () => {
        //await supabaseMethods.insert(values);
        props.modalState.reset();
      }}
      resetForm={() => setState("")}
      isSubmitButtonDisabled={!!state}
    >
      <FormItemWrapper label={"Report"}>
        <TextArea
          placeholder="BeaterFest was stopped in 2019 due to property damage, and no longer runs."
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </FormItemWrapper>
    </Modal>
  );
}
