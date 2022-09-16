// noinspection JSUnusedGlobalSymbols

export enum Countries {
  "United States" = "US",
  "Canada" = "CA",
}

export enum States {
  "Alabama" = "AL",
  "Alaska" = "AK",
  "American Samoa" = "AS",
  "Arizona" = "AZ",
  "Arkansas" = "AR",
  "California" = "CA",
  "Colorado" = "CO",
  "Connecticut" = "CT",
  "Delaware" = "DE",
  "District Of Columbia" = "DC",
  "Federated States Of Micronesia" = "FM",
  "Florida" = "FL",
  "Georgia" = "GA",
  "Guam" = "GU",
  "Hawaii" = "HI",
  "Idaho" = "ID",
  "Illinois" = "IL",
  "Indiana" = "IN",
  "Iowa" = "IA",
  "Kansas" = "KS",
  "Kentucky" = "KY",
  "Louisiana" = "LA",
  "Maine" = "ME",
  "Marshall Islands" = "MH",
  "Maryland" = "MD",
  "Massachusetts" = "MA",
  "Michigan" = "MI",
  "Minnesota" = "MN",
  "Mississippi" = "MS",
  "Missouri" = "MO",
  "Montana" = "MT",
  "Nebraska" = "NE",
  "Nevada" = "NV",
  "New Hampshire" = "NH",
  "New Jersey" = "NJ",
  "New Mexico" = "NM",
  "New York" = "NY",
  "North Carolina" = "NC",
  "North Dakota" = "ND",
  "Northern Mariana Islands" = "MP",
  "Ohio" = "OH",
  "Oklahoma" = "OK",
  "Oregon" = "OR",
  "Pennsylvania" = "PA",
  "Puerto Rico" = "PR",
  "Rhode Island" = "RI",
  "South Carolina" = "SC",
  "South Dakota" = "SD",
  "Tennessee" = "TN",
  "Texas" = "TX",
  "Utah" = "UT",
  "Vermont" = "VT",
  "Virgin Islands" = "VI",
  "Virginia" = "VA",
  "Washington" = "WA",
  "West Virginia" = "WV",
  "Wisconsin" = "WI",
  "Wyoming" = "WY",
}

export enum Provinces {
  "Alberta" = "AB",
  "British Columbia" = "BC",
  "Manitoba" = "MB",
  "New Brunswick" = "NB",
  "Newfoundland and Labrador" = "NL",
  "Northwest Territories" = "NT",
  "Nova Scotia" = "NS",
  "Nunavut" = "NU",
  "Ontario" = "ON",
  "Prince Edward Island" = "PE",
  "Quebec" = "QC",
  "Saskatchewan" = "SK",
  "Yukon Territory" = "YT",
}

export type GeoOption<T> = {
  name: string;
  abb: T;
};

export const convertEnumToObject = <T>(geoEnum: {
  [key: string]: T;
}): GeoOption<T>[] =>
  Object.entries(geoEnum).map((state) => {
    return {
      name: state[0],
      abb: state[1],
    };
  });
