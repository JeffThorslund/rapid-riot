import React, { useContext } from "react";
import { Box, ResponsiveContext } from "grommet";
import { getResponsiveSettings } from "./_utils/getResponsiveSettings";

interface Props {
  map: React.ReactNode;
  cards: React.ReactNode;
}

export const ResponsiveContainer = (props: Props) => {
  const size = useContext(ResponsiveContext);
  const settings = getResponsiveSettings(size);

  return (
    <Box direction={settings.direction} height={"100%"}>
      <Box width={settings.map.width} height={settings.map.height}>
        {props.map}
      </Box>
      <Box width={settings.cards.width} height={settings.cards.height}>
        {props.cards}
      </Box>
    </Box>
  );
};
