import React, { useState } from "react";
import { supabaseMethods } from "../../../database/supabase";
import { FormItemWrapper } from "../multiStepModal/FormItemWrapper";
import { Box, TextArea } from "grommet";
import { ModalWrapper } from "../multiStepModal";
import { FormStep } from "../../../types";

export const Reporting = (props: { closeModal: () => void }) => {
  const [text, setText] = useState("");
  const [formStep, setFormStep] = useState(FormStep.Filling);

  return (
    <ModalWrapper
      formStep={formStep}
      setFormStep={setFormStep}
      closeModal={props.closeModal}
      form={{
        fields: <ReportingFormInnards text={text} setText={setText} />,
        title: "Report an Issue",
        handleSubmit: () => supabaseMethods.insertReport(text),
        areAllFieldsValid: !!text,
      }}
    />
  );
};

const ReportingFormInnards = (props: {
  text: string;
  setText: (text: string) => void;
}) => {
  return (
    <FormItemWrapper label={"Report"}>
      <Box height={"small"}>
        <TextArea
          placeholder="e.g. BeaterFest has an updated website after the old one was hacked by squirt boaters."
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
          size={"medium"}
          style={{ height: 500 }}
        />
      </Box>
    </FormItemWrapper>
  );
};
