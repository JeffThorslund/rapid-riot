import { ThemeType } from "grommet";
import { accent } from "./components/_utils/colors";

export const theme: ThemeType = {
  global: {
    font: {
      family: "DM Sans",
      size: "18px",
      height: "20px",
    },
    colors: {},
  },
  layer: {
    border: {
      radius: "small",
    },
    container: {
      elevation: "large",
    },
  },
  anchor: {
    hover: {
      textDecoration: "none",
      extend: {
        color: accent,
      },
    },
  },
};
