import { Box, Button, Layer, Select, Text, TextInput } from "grommet";
import React, { useState } from "react";
import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";
import { Countries, Provinces, States } from "../../types";

interface FormState {
  title: string;
  link: string;
  country: undefined | Countries;
  state: undefined | States | Provinces;
  city: string;
}

const useFormState = () => {
  const defaultFormState: FormState = {
    title: "",
    link: "",
    country: undefined,
    state: undefined,
    city: "",
  };

  const [values, setValues] = useState<FormState>(defaultFormState);

  console.log(values);

  const stateData = getStateLabel(values.country);

  return {
    values,
    setValues,
    disabledFlags: {
      isStateDropdownDisabled: !values.country,
      isCityTextFieldDisabled: !values.state,
    },
    formHelpers: {
      stateLabel: stateData.label,
      stateList: stateData.list,
      clearStateValue: () =>
        setValues((value) => ({ ...value, state: undefined })),
      clearCityValue: () => setValues((value) => ({ ...value, city: "" })),
    },
    methods: {
      reset: () => setValues(defaultFormState),
    },
  };
};

const getStateLabel = (countryValue: Countries | undefined) => {
  if (countryValue === Countries.Canada) {
    return { label: "Province", list: Object.values(Provinces) };
  }

  return { label: "State", list: Object.values(States) };
};

export function FormModal(props: { modalState: ActiveIndexStateMethods }) {
  if (props.modalState.value === undefined) return null;

  const {
    values: value,
    setValues: setValue,
    disabledFlags,
    formHelpers,
    methods,
  } = useFormState();

  return (
    <Layer
      onEsc={props.modalState.reset}
      onClickOutside={props.modalState.reset}
      modal
    >
      <Box pad={"medium"} width={"large"}>
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
              options={Object.values(Countries).sort()}
              value={value.country}
              onChange={({ option }) => {
                formHelpers.clearStateValue();
                formHelpers.clearCityValue();
                setValue((value) => ({ ...value, country: option }));
              }}
            />
          </FormItemWrapper>

          <FormItemWrapper label={formHelpers.stateLabel}>
            <Select
              options={formHelpers.stateList.sort()}
              value={value.state}
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

        <Box direction="row" gap="medium" pad="small">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" onClick={methods.reset} />
        </Box>
      </Box>
    </Layer>
  );
}

interface FormItemWrapper {
  label: string;
  children: React.ReactNode;
}

const FormItemWrapper: React.FC<FormItemWrapper> = (props) => {
  return (
    <Box pad="small">
      <Text>{props.label}</Text>
      {props.children}
    </Box>
  );
};
