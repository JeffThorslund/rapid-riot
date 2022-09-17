import React from "react";
import { Festival } from "../../types";
import {
  ActiveIndexStateMethods,
  useActiveIndexState,
} from "../_utils/useActiveIndexState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";
import { Box } from "grommet";
import { ActionIconBar } from "../actionBar";
import { actionIconSchema } from "../actionBar/actionIconSchema";

interface Props {
  festivals: Festival[];
  festivalHoverState: ActiveIndexStateMethods;
}

export const FestivalCards = (props: Props) => {
  const modalState = useActiveIndexState();

  const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    800: 1,
  };

  return (
    <Box
      overflow={"auto"}
      background={"#ffffff"}
      pad={{ horizontal: "xsmall" }}
    >
      {modalState.value !== undefined
        ? actionIconSchema[modalState.value].form(modalState)
        : null}
      <ActionIconBar
        positionPlacement={{ right: 20, bottom: 10 }}
        modalIndex={modalState.value}
        actionIconSchema={actionIconSchema}
        onClick={(index: number) => modalState.set(index)}
      />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
      >
        {props.festivals.map((festival, index) => (
          <FestivalCard
            key={festival.title}
            festival={festival}
            onClick={() => openLink(festival.link)}
            onMouseEnter={() => props.festivalHoverState.set(index)}
            onMouseLeave={() => props.festivalHoverState.reset()}
            isCardHovered={props.festivalHoverState.isHovered(index)}
          />
        ))}
      </Masonry>
    </Box>
  );
};
