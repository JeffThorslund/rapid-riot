import { Countries, Provinces, States } from "../../types";
import { useState } from "react";
import { convertEnumToObject } from "../../types/geo";

export interface SubmissionFormState {
  title: string;
  link: string;
  country: Countries;
  state: States | Provinces;
  city: string;
}

const getDefaultStateEnumFromCountry = (countryAbbreviation: Countries) => {
  if (countryAbbreviation === Countries.Canada) {
    return Provinces["British Columbia"];
  }

  return States["Washington"];
};

const defaultValues: SubmissionFormState = {
  title: "",
  link: "",
  country: Countries["Canada"],
  state: getDefaultStateEnumFromCountry(Countries["Canada"]),
  city: "",
};

export const useSubmissionFormState = () => {
  const [values, setValues] = useState<SubmissionFormState>(defaultValues);

  const { list, label } = getStateLabelAndList(values.country);

  const areAllFieldsFilled = !!(values.title && values.link && values.city);

  return {
    values,
    setValues,
    formHelpers: {
      stateLabel: label,
      stateList: list,
      getDefaultStateValue: (countryValue: Countries) =>
        getDefaultStateEnumFromCountry(countryValue),
    },
    flags: {
      areAllFieldsFilled,
    },
  };
};

export type SubmissionFormStateType = ReturnType<typeof useSubmissionFormState>;

export const getStateLabelAndList = (countryValue: Countries) => {
  if (countryValue === Countries.Canada) {
    return {
      label: "Province",
      list: convertEnumToObject(Provinces).sort(),
    };
  }

  return {
    label: "State",
    list: convertEnumToObject(States).sort(),
  };
};
