import { Box } from "grommet";
import React from "react";
import { getCardStyle } from "../cards/_utils/getCardStyle";
import { useActiveIndexState } from "../_utils/useActiveIndexState";
import { ActionIcon } from "./ActionIcon";
import { TipWrapper } from "./TipWrapper";
import { ActionIconSchema } from "./actionIconSchema";
import { ActiveIndexState, Position } from "../../types";

export interface ActionIconBarProps {
  actionIconSchema: ActionIconSchema[];
  modalIndex: ActiveIndexState;
  positionPlacement: Partial<Position>;
}
export const ActionIconBar = (props: ActionIconBarProps) => {
  const tooltipHoverIndexState = useActiveIndexState();

  const MARGIN = 8;

  return (
    <Box
      background={"#444444"}
      round={"medium"}
      style={{
        position: "absolute",
        zIndex: Number.MAX_SAFE_INTEGER,
        ...props.positionPlacement,
        ...getCardStyle(false),
      }}
    >
      {tooltipHoverIndexState.value !== undefined ? (
        <TipWrapper
          key={
            props.actionIconSchema[tooltipHoverIndexState.value].tooltip.message
          }
          text={
            props.actionIconSchema[tooltipHoverIndexState.value].tooltip.message
          }
        />
      ) : null}

      <Box
        direction={"row"}
        justify={"end"}
        style={{ transition: "all ease 0.2s" }}
      >
        {props.actionIconSchema.map(({ icon }, index) => {
          return (
            <ActionIcon
              key={icon.props.key}
              Icon={icon.component}
              color={icon.props.color}
              onMouseEnter={() => tooltipHoverIndexState.set(index)}
              onMouseLeave={() => tooltipHoverIndexState.reset()}
              onClick={() => {
                console.log(props.modalIndex, index);
                if (props.modalIndex === index) return;
                props.openModal(index);
              }}
              isHovered={tooltipHoverIndexState.isHovered(index)}
              margin={MARGIN}
            />
          );
        })}
      </Box>
    </Box>
  );
};
