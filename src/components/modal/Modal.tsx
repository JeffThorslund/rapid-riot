import { Box, Button, Layer } from "grommet";
import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";
import React from "react";

export const Modal = (props: {
  closeModal: ActiveIndexStateMethods["reset"];
  submitForm: () => void;
  resetForm: () => void;
  children: React.ReactNode;
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
        <Box direction="row" gap="medium" pad="small">
          <Button
            type="submit"
            primary
            label="Submit"
            onClick={props.submitForm}
          />
          <Button type="reset" label="Reset" onClick={props.resetForm} />
        </Box>
      </Box>
    </Layer>
  );
};
