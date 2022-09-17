import { Box, Button, Layer, Spinner, Text } from "grommet";
import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";
import React, { useState } from "react";

export const Modal = (props: {
  closeModal: ActiveIndexStateMethods["reset"];
  submitForm: () => void;
  resetForm: () => void;
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
      <Box pad={"medium"} width={"large"} round={"large"}>
        {props.children}
        <Box direction="row" gap="medium" pad="small" justify={"between"}>
          <Box direction={"row"} gap="medium">
            <SubmissionButton
              onClick={props.submitForm}
              areAllFieldsValid={props.isSubmitButtonDisabled}
            />
            <Button type="reset" label="Reset" onClick={props.resetForm} />
          </Box>

          <Button label="Close" onClick={props.closeModal} justify={"center"} />
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
