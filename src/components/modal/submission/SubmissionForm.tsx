import { Box, Select, TextInput } from "grommet";
import React from "react";
import { ActiveIndexStateMethods } from "../../_utils/useActiveIndexState";
import { Countries } from "../../../types";
import { Modal } from "../Modal";
import { FormItemWrapper } from "../FormItemWrapper";
import { useSubmissionFormState } from "./useSubmissionFormState";
import { convertEnumToObject } from "../../../types/geo";

export function SubmissionForm(props: { modalState: ActiveIndexStateMethods }) {
  if (props.modalState.value === undefined) return null;

  const {
    values: value,
    setValues: setValue,
    disabledFlags,
    formHelpers,
    methods,
  } = useSubmissionFormState();

  return (
    <Modal
      closeModal={props.modalState.reset}
      submitForm={() => console.log(value)}
      resetForm={methods.reset}
    >
      <FormItemWrapper label={"Festival Name"}>
        <TextInput
          placeholder="e.g. Clearwater Kayak Festival"
          value={value.title}
          onChange={(e) =>
            setValue((value) => ({ ...value, title: e.target.value }))
          }
        />
      </FormItemWrapper>

      <FormItemWrapper label={"Link"}>
        <TextInput
          placeholder="e.g. https://www.facebook.com/ClearwaterKayakFestival"
          value={value.link}
          onChange={(e) =>
            setValue((value) => ({ ...value, link: e.target.value }))
          }
        />
      </FormItemWrapper>

      <Box direction={"row"}>
        <FormItemWrapper label={"Country"}>
          <Select
            options={convertEnumToObject(Countries).sort()}
            value={value.country}
            labelKey="name"
            valueKey="abb"
            onChange={({ option }) => {
              formHelpers.clearStateValue();
              formHelpers.clearCityValue();
              setValue((value) => ({ ...value, country: option }));
            }}
          />
        </FormItemWrapper>

        <FormItemWrapper label={formHelpers.stateLabel}>
          <Select
            options={formHelpers.stateList}
            value={value.state}
            labelKey="name"
            valueKey="abb"
            onChange={({ option }) => {
              formHelpers.clearCityValue();
              setValue((value) => ({ ...value, state: option }));
            }}
            disabled={disabledFlags.isStateDropdownDisabled}
          />
        </FormItemWrapper>

        <FormItemWrapper label={"City"}>
          <TextInput
            placeholder="Clearwater"
            value={value.city}
            onChange={(e) =>
              setValue((value) => ({ ...value, city: e.target.value }))
            }
            disabled={disabledFlags.isCityTextFieldDisabled}
          />
        </FormItemWrapper>
      </Box>
    </Modal>
  );
}
