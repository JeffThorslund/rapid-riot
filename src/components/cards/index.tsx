import React from "react";
import { RefFestival } from "../../types";
import { useActiveIndexState } from "../_utils/useActiveIndexState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";
import { Box, Spinner } from "grommet";
import { ActionIconBar } from "../actionBar";
import { actionIconSchema } from "../actionBar/_utils/actionIconSchema";
import { UseSelectionManagementMethods } from "../interface/_utils/useSelectionManagement";
import { NoResultsFallbackWrapper } from "./NoResultsFallbackWrapper";
import { FeedbackModal } from "./FeedbackModal";
import { breakpointColumnsObj } from "./_utils/breakpointColumnsObj";
import { getFestivalIdentifier } from "../interface/_utils/getFestivalIdentifier";

interface Props {
  festivals: RefFestival[];
  selectionManagement: UseSelectionManagementMethods;
  isDataFetching: boolean;
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
      <React.Fragment>
        <FeedbackModal modalState={modalState} />
        <ActionIconBar
          positionPlacement={{ right: 20, bottom: 10 }}
          modalIndex={modalState.value}
          actionIconSchema={actionIconSchema}
          onClick={(index: number) => modalState.set(index)}
        />
        <NoResultsFallbackWrapper numberOfItems={props.festivals.length}>
          {props.isDataFetching ? (
            <Box
              justify={"center"}
              align={"center"}
              pad={"large"}
              style={{ overflow: "hidden" }}
            >
              <Spinner size={"medium"} />
            </Box>
          ) : (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
            >
              {props.festivals.map((festival) => {
                const { hover, select } = props.selectionManagement;
                const festivalIdentifier = getFestivalIdentifier(festival);

                return (
                  <FestivalCard
                    key={festival.title}
                    festival={festival}
                    onClick={() => openLink(festival.link)}
                    onMouseEnter={() => hover.set(festivalIdentifier)}
                    onMouseLeave={() => hover.reset()}
                    isCardHovered={hover.isActive(festivalIdentifier)}
                    isCardSelected={select.isActive(festivalIdentifier)}
                  />
                );
              })}
            </Masonry>
          )}
        </NoResultsFallbackWrapper>
      </React.Fragment>
    </Box>
  );
};
