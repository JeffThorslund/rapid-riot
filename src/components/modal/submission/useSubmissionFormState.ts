import { Countries, Provinces, States, GeoOption } from "../../../types";
import { useState } from "react";
import { convertEnumToObject } from "../../../types/geo";

export interface SubmissionFormState {
  title: string;
  link: string;
  country: undefined | GeoOption<Countries>;
  state: undefined | GeoOption<States | Provinces>;
  city: string;
}

export const useSubmissionFormState = () => {
  const defaultSubmissionFormState: SubmissionFormState = {
    title: "",
    link: "",
    country: undefined,
    state: undefined,
    city: "",
  };

  const [values, setValues] = useState<SubmissionFormState>(
    defaultSubmissionFormState
  );

  const { list, label } = getStateLabelAndList(values.country);

  return {
    values,
    setValues,
    disabledFlags: {
      isStateDropdownDisabled: !values.country,
      isCityTextFieldDisabled: !values.state,
    },
    formHelpers: {
      stateLabel: label,
      stateList: list,
      clearStateValue: () => {
        setValues((value) => ({
          ...value,
          state: defaultSubmissionFormState.state,
        }));
      },
      clearCityValue: () => {
        setValues((value) => ({
          ...value,
          city: defaultSubmissionFormState.city,
        }));
      },
    },
    methods: {
      reset: () => setValues(defaultSubmissionFormState),
    },
  };
};

export const getStateLabelAndList = (
  countryValue: GeoOption<Countries> | undefined
) => {
  if (countryValue === undefined) {
    return { label: "State", list: [] };
  }

  if (countryValue.abb === Countries.Canada) {
    return { label: "Province", list: convertEnumToObject(Provinces).sort() };
  }

  return { label: "State", list: convertEnumToObject(States).sort() };
};
