import { Festival } from "../../types";

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
    address: "Summersville, West Virginia 26651",
    coordinates: { lat: 38.281916708182, lng: -80.84267523502763 },
    id: "a",
  },
];
