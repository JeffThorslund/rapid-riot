import React from "react";
import { Festival } from "../../types";
import { useActiveIndexState } from "../_utils/useActiveIndexState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";
import { Box } from "grommet";
import { ActionIconBar } from "../actionBar";
import { actionIconSchema } from "../actionBar/actionIconSchema";
import { UseSelectionManagement } from "../_utils/useSelectionManagement";

interface Props {
  festivals: Festival[];
  selectionManagement: UseSelectionManagement;
}

export const FestivalCards = (props: Props) => {
  const modalState = useActiveIndexState();

  const breakpointColumnsObj = {
    default: 3,
    1600: 2,
    1100: 1,
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
            onMouseEnter={() => props.selectionManagement.hover.set(index)}
            onMouseLeave={() => props.selectionManagement.hover.reset()}
            isCardHovered={props.selectionManagement.hover.isActive(index)}
            isCardSelected={props.selectionManagement.select.isActive(index)}
          />
        ))}
      </Masonry>
    </Box>
  );
};
