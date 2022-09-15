import React from "react";
import { Festival } from "../../types";
import { HoverStateMethods } from "../_utils/useHoverState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";
import { Box } from "grommet";
import { ActionIconBar } from "./actionIconBar";

interface Props {
  festivals: Festival[];
  hoverStateMethods: HoverStateMethods;
}

export const FestivalCards = (props: Props) => {
  return (
    <Box overflow={"auto"} background={"background"}>
      <ActionIconBar rightPosition={20} bottomPosition={10} />
      <Masonry breakpointCols={3} className="my-masonry-grid">
        {props.festivals.map((festival) => (
          <FestivalCard
            key={festival.title}
            festival={festival}
            onClick={() => openLink(festival.link)}
            onMouseEnter={() => props.hoverStateMethods.set(festival.id)}
            onMouseLeave={() => props.hoverStateMethods.reset()}
            isCardHovered={props.hoverStateMethods.isHovered(festival.id)}
          />
        ))}
      </Masonry>
    </Box>
  );
};
