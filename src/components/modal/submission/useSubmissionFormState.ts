import { Countries, Provinces, States } from "../../../types";
import { useState } from "react";
import { convertEnumToObject } from "../../../types/geo";

export interface SubmissionFormState {
  title: string;
  link: string;
  country: Countries;
  state: States | Provinces;
  city: string;
}

export const useSubmissionFormState = () => {
  const defaultValues: SubmissionFormState = {
    title: "",
    link: "",
    country: Countries["Canada"],
    state: Provinces["British Columbia"],
    city: "",
  };

  const [values, setValues] = useState<SubmissionFormState>(defaultValues);

  const { list, label } = getStateLabelAndList(values.country);

  return {
    values,
    setValues,
    formHelpers: {
      stateLabel: label,
      stateList: list,
      getDefaultStateValue: (countryValue: Countries) =>
        getStateLabelAndList(countryValue).defaultValue,
    },
    methods: {
      reset: () => setValues(defaultValues),
    },
  };
};

export const getStateLabelAndList = (countryValue: Countries) => {
  if (countryValue === Countries.Canada) {
    return {
      label: "Province",
      list: convertEnumToObject(Provinces).sort(),
      defaultValue: Provinces["British Columbia"],
    };
  }

  return {
    label: "State",
    list: convertEnumToObject(States).sort(),
    defaultValue: States["Washington"],
  };
};
