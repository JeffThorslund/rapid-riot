import React from "react";
import { RefFestival } from "../../types";
import { useActiveIndexState } from "../_utils/useActiveIndexState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";
import { Box } from "grommet";
import { ActionIconBar } from "../actionBar";
import { actionIconSchema } from "../actionBar/_utils/actionIconSchema";
import { UseSelectionManagementMethods } from "../interface/_utils/useSelectionManagement";
import { festivals } from "../../database/data";
import { NoResultsFallbackWrapper } from "./NoResultsFallbackWrapper";
import { FeedbackModal } from "./FeedbackModal";
import { breakpointColumnsObj } from "./_utils/breakpointColumnsObj";

interface Props {
  festivals: RefFestival[];
  selectionManagement: UseSelectionManagementMethods;
}

export const FestivalCards = (props: Props) => {
  const modalState = useActiveIndexState<number>();

  return (
    <Box
      overflow={"auto"}
      background={"#ffffff"}
      pad={{ horizontal: "xsmall" }}
      style={{ scrollBehavior: "smooth" }}
    >
      <FeedbackModal modalState={modalState} />
      <ActionIconBar
        positionPlacement={{ right: 20, bottom: 10 }}
        modalIndex={modalState.value}
        actionIconSchema={actionIconSchema}
        onClick={(index: number) => modalState.set(index)}
      />
      <NoResultsFallbackWrapper numberOfItems={festivals.length}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
        >
          {props.festivals.map((festival) => {
            const { hover, select } = props.selectionManagement;

            return (
              <FestivalCard
                key={festival.title}
                festival={festival}
                onClick={() => openLink(festival.link)}
                onMouseEnter={() => hover.set(festival.title)}
                onMouseLeave={() => hover.reset()}
                isCardHovered={hover.isActive(festival.title)}
                isCardSelected={select.isActive(festival.title)}
              />
            );
          })}
        </Masonry>
      </NoResultsFallbackWrapper>
    </Box>
  );
};
