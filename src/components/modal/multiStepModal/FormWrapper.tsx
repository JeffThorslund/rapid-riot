import React from "react";
import { Box, Button, Text } from "grommet";
import { SubmissionButton } from "./SubmissionButton";

export const FormWrapper = (props: {
  closeModal: () => void;
  title: string;
  handleSubmit: () => void;
  areAllFieldsValid: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Box>
      <Box direction="column" gap="medium" pad="small" align={"center"}>
        <Text size={"large"}>{props.title}</Text>
      </Box>
      {props.children}
      <Box direction="row" gap="medium" pad="small" justify={"between"}>
        <SubmissionButton
          onClick={props.handleSubmit}
          areAllFieldsValid={props.areAllFieldsValid}
        />
        <Button label="Cancel" onClick={props.closeModal} />
      </Box>
    </Box>
  );
};
