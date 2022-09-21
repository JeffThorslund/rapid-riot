import { Box, Layer } from "grommet";
import { MessageAlert } from "./MessageAlert";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { FormWrapper } from "./FormWrapper";
import { FormStep } from "../../../types";

export interface Props {
  formStep: FormStep;
  setFormStep: Dispatch<SetStateAction<FormStep>>;
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
      <Box pad={"medium"} width={"large"}>
        {
          {
            [FormStep.Filling]: (
              <FormWrapper
                closeModal={props.closeModal}
                title={props.form.title}
                handleSubmit={async () => {
                  try {
                    await props.form.handleSubmit();
                    props.setFormStep(FormStep.Success);
                  } catch {
                    props.setFormStep(FormStep.Failure);
                  }
                }}
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
                icon={<FaTimesCircle size={80} color={"#FF4040"} />}
                closeModal={props.closeModal}
              />
            ),
          }[props.formStep]
        }
      </Box>
    </Layer>
  );
};
