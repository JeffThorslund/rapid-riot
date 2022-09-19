import { Box, TextArea } from "grommet";
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
      isSubmitButtonDisabled={!!text}
      title={"Report an Issue"}
    >
      <FormItemWrapper label={"Report"}>
        <Box height={"small"}>
          <TextArea
            placeholder="e.g. BeaterFest has an updated website after the old one was hacked by squirt boaters."
            value={text}
            onChange={(e) => setText(e.target.value)}
            size={"medium"}
            style={{ height: 500 }}
          />
        </Box>
      </FormItemWrapper>
    </Modal>
  );
}
