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
import { Box, Layer } from "grommet";
import { ActionIconBar } from "../actionBar";
import { actionIconSchema } from "../actionBar/actionIconSchema";

interface Props {
  festivals: Festival[];
  festivalHoverState: ActiveIndexStateMethods;
}

export const FestivalCards = (props: Props) => {
  const modalState = useActiveIndexState();

  return (
    <Box overflow={"auto"} background={"background"}>
      {modalState.value !== undefined ? (
        <Layer onEsc={modalState.reset} onClickOutside={modalState.reset} modal>
          Hello, {modalState.value},
          {actionIconSchema[modalState.value].form.title}
        </Layer>
      ) : null}
      <ActionIconBar
        positionPlacement={{ right: 20, bottom: 10 }}
        modalIndex={modalState.value}
        actionIconSchema={actionIconSchema}
        onClick={(index: number) => modalState.set(index)}
      />
      <Masonry breakpointCols={3} className="my-masonry-grid">
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
