import { Box, Button, Layer, Text } from "grommet";
import React from "react";
import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";
import { SubmissionButton } from "./SubmissionButton";

export const Modal = (props: {
  closeModal: ActiveIndexStateMethods["reset"];
  submitForm: () => void;
  children: React.ReactNode;
  isSubmitButtonDisabled: boolean;
  title: string;
}) => {
  return (
    <Layer
      onEsc={props.closeModal}
      onClickOutside={props.closeModal}
      background={"background"}
      modal
    >
      <Box pad={"medium"} width={"large"}>
        <Box direction="column" gap="medium" pad="small" align={"center"}>
          <Text size={"large"}>{props.title}</Text>
        </Box>
        {props.children}
        <Box direction="row" gap="medium" pad="small" justify={"between"}>
          <SubmissionButton
            onClick={props.submitForm}
            areAllFieldsValid={props.isSubmitButtonDisabled}
          />
          <Button
            label="Cancel"
            onClick={props.closeModal}
            justify={"center"}
          />
        </Box>
      </Box>
    </Layer>
  );
};
