import React, { useState } from "react";
import { FormItemWrapper } from "../multiStepModal/FormItemWrapper";
import { Box, TextArea } from "grommet";
import { ModalWrapper } from "../multiStepModal";
import { FormStep, RawNewReport, ReportSubmissionLite } from "../../../types";
import { supabase } from "../../../database/supabase";
import { useMutation } from "@tanstack/react-query";

export const Reporting = (props: { closeModal: () => void }) => {
  const [text, setText] = useState("");
  const [formStep, setFormStep] = useState(FormStep.Filling);

  const mutation = useMutation({
    mutationFn: insertReport
  })

  return (
    <ModalWrapper
      formStep={formStep}
      setFormStep={setFormStep}
      closeModal={props.closeModal}
      form={{
        fields: <ReportingFormInnards text={text} setText={setText} />,
        title: "Report an Issue",
        handleSubmit: () => mutation.mutate(text),
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

export const insertReport = async (report: string) => {
  const dataToSend: ReportSubmissionLite = { report };
  return supabase.from<RawNewReport>("new_reports").insert([dataToSend]);
};