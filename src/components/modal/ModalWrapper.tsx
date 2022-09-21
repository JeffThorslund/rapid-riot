import { Box, Layer } from "grommet";
import { MessageAlert } from "./MessageAlert";
import { FaCheckCircle } from "react-icons/fa";
import React, { ReactNode } from "react";
import { FormWrapper } from "./FormWrapper";
import { FormStep } from "../../types";

export interface Props {
  formStep: FormStep;
  form: {
    title: string;
    fields: ReactNode;
    handleSubmit: () => void;
    areAllFieldsValid: boolean;
  };
  closeModal: () => void;
}

export const ModalWrapper = (props: Props) => {
  return (
    <Layer
      onEsc={props.closeModal}
      onClickOutside={props.closeModal}
      background={"background"}
      modal
    >
      <Box pad={"medium"} width={"large"} height={"medium"}>
        {
          {
            [FormStep.Filling]: (
              <FormWrapper
                closeModal={props.closeModal}
                title={props.form.title}
                handleSubmit={props.form.handleSubmit}
                areAllFieldsValid={props.form.areAllFieldsValid}
              >
                {props.form.fields}
              </FormWrapper>
            ),
            [FormStep.Success]: (
              <MessageAlert
                title={"Thanks for the submission!"}
                description={
                  "It will be reviewed and visible on the map shortly."
                }
                icon={<FaCheckCircle size={80} color={"#00C781"} />}
                closeModal={props.closeModal}
              />
            ),
            [FormStep.Failure]: (
              <MessageAlert
                title={"There was an issue."}
                description={"We will look into this and get it fixed ASAP."}
                icon={<FaCheckCircle size={80} color={"#FF4040"} />}
                closeModal={props.closeModal}
              />
            ),
          }[props.formStep]
        }
      </Box>
    </Layer>
  );
};
