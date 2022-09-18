import { Box, Button, Layer, Spinner, Text } from "grommet";
import React, { useState } from "react";
import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";

export const Modal = (props: {
  closeModal: ActiveIndexStateMethods["reset"];
  submitForm: () => void;
  children: React.ReactNode;
  isSubmitButtonDisabled: boolean;
}) => {
  return (
    <Layer
      onEsc={props.closeModal}
      onClickOutside={props.closeModal}
      background={"background"}
      modal
    >
      <Box pad={"medium"} width={"large"}>
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

interface SubmissionButtonProps {
  onClick: () => void;
  areAllFieldsValid: boolean;
}

const SubmissionButton = (props: SubmissionButtonProps) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const label = (
    <Box direction={"row"}>
      <Text>Submit</Text>
      {isButtonLoading ? (
        <Spinner color={"black"} size={"xsmall"} margin={{ left: "small" }} />
      ) : null}
    </Box>
  );

  return (
    <Button
      type="submit"
      primary
      label={label}
      disabled={!props.areAllFieldsValid || isButtonLoading}
      onClick={async () => {
        setIsButtonLoading(true);
        await props.onClick();
        setIsButtonLoading(false);
      }}
    />
  );
};
