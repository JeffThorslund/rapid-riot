import { Box, Select, TextInput } from "grommet";
import React from "react";
import { ActiveIndexStateMethods } from "../../_utils/useActiveIndexState";
import { Countries, Provinces, States } from "../../../types";
import { Modal } from "../Modal";
import { FormItemWrapper } from "../FormItemWrapper";
import { useSubmissionFormState } from "./useSubmissionFormState";
import { convertEnumToObject, GeoOption } from "../../../types/geo";
import { supabaseMethods } from "../../../database/supabase";

export function SubmissionForm(props: { modalState: ActiveIndexStateMethods }) {
  if (props.modalState.value === undefined) return null;

  const {
    values,
    setValues: setValue,
    formHelpers,
    flags,
  } = useSubmissionFormState();

  return (
    <Modal
      closeModal={props.modalState.reset}
      submitForm={async () => {
        await supabaseMethods.insertSubmission(values);
        props.modalState.reset();
      }}
      isSubmitButtonDisabled={flags.areAllFieldsFilled}
    >
      <FormItemWrapper label={"Festival Name"}>
        <TextInput
          placeholder="e.g. Clearwater Kayak Festival"
          value={values.title}
          onChange={(e) =>
            setValue((value) => ({ ...value, title: e.target.value }))
          }
        />
      </FormItemWrapper>

      <FormItemWrapper label={"Link"}>
        <TextInput
          placeholder="e.g. https://www.facebook.com/ClearwaterKayakFestival"
          value={values.link}
          onChange={(e) =>
            setValue((value) => ({ ...value, link: e.target.value }))
          }
        />
      </FormItemWrapper>

      <Box direction={"row"}>
        <FormItemWrapper label={"Country"}>
          <Select
            options={convertEnumToObject(Countries).sort()}
            value={values.country}
            valueKey={{ key: "abb", reduce: true }}
            labelKey={"name"}
            onChange={({ option }: { option: GeoOption<Countries> }) => {
              setValue((value) => ({
                ...value,
                country: option.abb,
                state: formHelpers.getDefaultStateValue(option.abb),
              }));
            }}
          />
        </FormItemWrapper>

        <FormItemWrapper label={formHelpers.stateLabel}>
          <Select
            options={formHelpers.stateList}
            value={values.state}
            labelKey={"name"}
            valueKey={{ key: "abb", reduce: true }}
            onChange={(arg: { option: GeoOption<Provinces | States> }) => {
              setValue((value) => ({ ...value, state: arg.option.abb }));
            }}
          />
        </FormItemWrapper>

        <FormItemWrapper label={"City"}>
          <TextInput
            placeholder="Clearwater"
            value={values.city}
            onChange={(e) =>
              setValue((value) => ({ ...value, city: e.target.value }))
            }
          />
        </FormItemWrapper>
      </Box>
    </Modal>
  );
}
