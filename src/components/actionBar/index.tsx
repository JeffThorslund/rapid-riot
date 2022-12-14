import { Box } from "grommet";
import React from "react";
import {
  ActiveIndexStateMethods,
  useActiveIndexState,
} from "../_utils/useActiveIndexState";
import { ActionIcon } from "./ActionIcon";
import { ActionIconSchema } from "./_utils/actionIconSchema";
import { Position } from "../../types";
import { ActionBarWrapper } from "./ActionBarWrapper";

export interface ActionIconBarProps {
  actionIconSchema: ActionIconSchema[];
  modalIndex: ActiveIndexStateMethods["value"];
  positionPlacement: Partial<Position>;
  onClick: (index: number) => void;
}

export const ActionIconBar = (props: ActionIconBarProps) => {
  const tooltipHoverIndexState = useActiveIndexState<number>();

  const MARGIN = 8;

  return (
    <ActionBarWrapper
      positionPlacement={props.positionPlacement}
      isHidden={props.modalIndex !== undefined}
    >
      <Box direction={"row"} justify={"end"} align={"center"}>
        {tooltipHoverIndexState.value !== undefined ? (
          <Box pad={{ horizontal: "medium" }}>
            {
              props.actionIconSchema[tooltipHoverIndexState.value].tooltip
                .message
            }
          </Box>
        ) : null}

        {props.actionIconSchema.map(({ icon }, index) => {
          return (
            <ActionIcon
              key={icon.props.key}
              Icon={icon.component}
              color={icon.props.color}
              onMouseEnter={() => tooltipHoverIndexState.set(index)}
              onMouseLeave={() => tooltipHoverIndexState.reset()}
              onClick={() => props.onClick(index)}
              isHovered={tooltipHoverIndexState.isActive(index)}
              margin={MARGIN}
            />
          );
        })}
      </Box>
    </ActionBarWrapper>
  );
};
