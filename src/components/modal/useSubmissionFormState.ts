import { Countries, Provinces, States } from "../../types";
import { useState } from "react";

export interface SubmissionFormState {
  title: string;
  link: string;
  country: undefined | Countries;
  state: undefined | States | Provinces;
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
        setValues((value) => ({
          ...value,
          state: defaultSubmissionFormState.state,
        })),
      clearCityValue: () =>
        setValues((value) => ({
          ...value,
          city: defaultSubmissionFormState.city,
        })),
    },
    methods: {
      reset: () => setValues(defaultSubmissionFormState),
    },
  };
};

export const getStateLabel = (countryValue: Countries | undefined) => {
  if (countryValue === Countries.Canada) {
    return { label: "Province", list: Object.values(Provinces).sort() };
  }

  return { label: "State", list: Object.values(States).sort() };
};
