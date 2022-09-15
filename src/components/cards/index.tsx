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
import { FormModal } from "../form/FormModal";

interface Props {
  festivals: Festival[];
  festivalHoverState: ActiveIndexStateMethods;
}

export const FestivalCards = (props: Props) => {
  const modalState = useActiveIndexState();

  return (
    <Box overflow={"auto"} background={"background"}>
      {modalState.value !== undefined ? (
        <FormModal modalState={modalState} />
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
