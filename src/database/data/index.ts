import { Festival, Countries, States } from "../../types";

export const dataProvider = (): Festival[] => {
  return festivals;
};

const festivals: Festival[] = [
  // {
  //   title: "Unlikely Paddlefest",
  //   link: "https://www.facebook.com/groups/380071755490155",
  // },
  // {
  //   title: "Nelson Race",
  // },
  {
    title: "Gauley Fest",
    link: "https://www.americanwhitewater.org/content/Wiki/aw:events_gauley",
    id: "a",
    location: {
      coordinates: { lat: 38.281916708182, lng: -80.84267523502763 },
      country: Countries.UnitedStates,
      state: States.WestVirginia,
      city: "Summersville",
      zipCode: "26651",
    },
  },
  {
    title: "Dolores River Festival",
    link: "https://www.doloresriverfest.org/",
    id: "b",
    location: {
      coordinates: { lat: 37.47439000943224, lng: -108.49743635090842 },
      country: Countries.UnitedStates,
      state: States.Colorado,
      city: "Dolores",
      zipCode: "81323",
    },
  },
  // {
  //   title: "Winni River Days",
  // },
  {
    title: "Cheat River Festival",
    link: "https://cheatfest.org/",
    id: "c",
    location: {
      coordinates: { lat: 39.49390539602751, lng: -79.64195234306692 },
      country: Countries.UnitedStates,
      state: States.WestVirginia,
      city: "Albright",
      zipCode: "26519",
    },
  },
];
