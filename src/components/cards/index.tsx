import React, { useState } from "react";
import { Festival } from "../../types";
import { HoverStateMethods } from "../_utils/useHoverState";
import { FestivalCard } from "./FestivalCard";
import Masonry from "react-masonry-css";
import "./index.css";
import { openLink } from "../_utils/openLink";
import { Box, Layer } from "grommet";
import { ActionIconBar } from "../actionBar";

interface Props {
  festivals: Festival[];
  hoverStateMethods: HoverStateMethods;
}

export const useIsFormVisible = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const methods = {
    open: () => setIsFormVisible(true),
    close: () => setIsFormVisible(false),
  };

  return { isFormVisible, methods };
};

export const FestivalCards = (props: Props) => {
  const { isFormVisible, methods } = useIsFormVisible();

  return (
    <Box overflow={"auto"} background={"background"}>
      {isFormVisible && (
        <Layer onEsc={methods.close} onClickOutside={methods.close} modal>
          Hello
        </Layer>
      )}
      <ActionIconBar
        rightPosition={20}
        bottomPosition={10}
        openModal={methods.open}
      />
      <Masonry breakpointCols={3} className="my-masonry-grid">
        {props.festivals.map((festival, index) => (
          <FestivalCard
            key={festival.title}
            festival={festival}
            onClick={() => openLink(festival.link)}
            onMouseEnter={() => props.hoverStateMethods.set(index)}
            onMouseLeave={() => props.hoverStateMethods.reset()}
            isCardHovered={props.hoverStateMethods.isHovered(index)}
          />
        ))}
      </Masonry>
    </Box>
  );
};
