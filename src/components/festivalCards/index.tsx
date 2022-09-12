import React from "react";
import { Festival } from "../../types";
import { HoverStateMethods } from "../_utils/useHoverState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";

interface Props {
  festivals: Festival[];
  hoverStateMethods: HoverStateMethods;
}

export const FestivalCards = (props: Props) => {
  return (
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
  );
};
