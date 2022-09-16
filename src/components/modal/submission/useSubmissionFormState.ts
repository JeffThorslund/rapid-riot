import { Countries, Provinces, States } from "../../../types";
import { useState } from "react";
import { convertEnumToObject } from "../../../types/geo";

export interface SubmissionFormState {
  title: string;
  link: string;
  country: undefined | GeoObj<Countries>;
  state: undefined | GeoObj<States | Provinces>;
  city: string;
}

type GeoObj<T> = {
  name: string;
  abb: T;
};

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
  countryValue: GeoObj<Countries> | undefined
) => {
  if (countryValue === undefined) {
    return { label: "State", list: [] };
  }

  if (countryValue.abb === Countries.Canada) {
    return { label: "Province", list: convertEnumToObject(Provinces).sort() };
  }

  return { label: "State", list: convertEnumToObject(States).sort() };
};
