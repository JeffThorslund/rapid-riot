import { TextArea } from "grommet";
import React, { useState } from "react";
import { ActiveIndexStateMethods } from "../../_utils/useActiveIndexState";
import { Modal } from "../Modal";
import { FormItemWrapper } from "../FormItemWrapper";
import { supabaseMethods } from "../../../database/supabase";

export function ReportingForm(props: { modalState: ActiveIndexStateMethods }) {
  if (props.modalState.value === undefined) return null;

  const [text, setText] = useState("");

  return (
    <Modal
      closeModal={props.modalState.reset}
      submitForm={async () => {
        await supabaseMethods.insertReport(text);
        props.modalState.reset();
      }}
      resetForm={() => setText("")}
      isSubmitButtonDisabled={!!text}
    >
      <FormItemWrapper label={"Report"}>
        <TextArea
          placeholder="BeaterFest was stopped in 2019 due to property damage, and no longer runs."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormItemWrapper>
    </Modal>
  );
}
