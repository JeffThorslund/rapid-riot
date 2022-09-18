import React from "react";
import { RefFestival } from "../../types";
import { useActiveIndexState } from "../_utils/useActiveIndexState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";
import { Box } from "grommet";
import { ActionIconBar } from "../actionBar";
import { actionIconSchema } from "../actionBar/actionIconSchema";
import { UseSelectionManagementMethods } from "../_utils/useSelectionManagement";

interface Props {
  festivals: RefFestival[];
  selectionManagement: UseSelectionManagementMethods;
}

export const FestivalCards = (props: Props) => {
  const modalState = useActiveIndexState<number>();

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
      style={{ scrollBehavior: "smooth" }}
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
        {props.festivals.map((festival) => (
          <FestivalCard
            key={festival.title}
            festival={festival}
            onClick={() => openLink(festival.link)}
            onMouseEnter={() =>
              props.selectionManagement.hover.set(festival.title)
            }
            onMouseLeave={() => props.selectionManagement.hover.reset()}
            isCardHovered={props.selectionManagement.hover.isActive(
              festival.title
            )}
            isCardSelected={props.selectionManagement.select.isActive(
              festival.title
            )}
          />
        ))}
      </Masonry>
    </Box>
  );
};
