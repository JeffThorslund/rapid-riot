import { Box } from "grommet";
import { FaExclamationCircle, FaPlusCircle } from "react-icons/fa";
import React from "react";
import { getCardStyle } from "../cards/_utils/getCardStyle";
import { useHoverState } from "../_utils/useHoverState";
import { ActionIcon } from "./ActionIcon";
import { IconType } from "react-icons";
import { TipWrapper } from "./TipWrapper";

export interface ActionIconBarProps {
  rightPosition: number;
  bottomPosition: number;
}

interface IconData {
  icon: IconType;
  iconProps: {
    color: string;
    key: string;
  };
  tipMessage: string;
}

export const ActionIconBar = (props: ActionIconBarProps) => {
  const useHoverStateMethods = useHoverState();

  const MARGIN = 8;

  const iconData: IconData[] = [
    {
      icon: FaExclamationCircle,
      iconProps: {
        color: "#ef6f6c",
        key: "delete",
      },
      tipMessage: "Report outdated, or incorrect data.",
    },
    {
      icon: FaPlusCircle,
      iconProps: {
        color: "#3FA34D",
        key: "add",
      },
      tipMessage: "Submit a new festival",
    },
  ];

  const showHoveredTip = (
    iconData: IconData[],
    callback: (index: number) => boolean
  ) => {
    const tip = iconData.find((icon, index) => callback(index));

    if (tip === undefined) return null;

    return <TipWrapper key={tip.tipMessage} text={tip.tipMessage} />;
  };

  return (
    <Box
      background={"#444444"}
      round={"30px"}
      style={{
        position: "absolute",
        zIndex: Number.MAX_SAFE_INTEGER,
        right: props.rightPosition,
        bottom: props.bottomPosition,
        ...getCardStyle(false),
      }}
    >
      {showHoveredTip(iconData, (index) =>
        useHoverStateMethods.isHovered(index)
      )}

      <Box
        direction={"row"}
        justify={"end"}
        style={{ transition: "all ease 0.2s" }}
      >
        {iconData.map((icon, index) => {
          return (
            <ActionIcon
              key={icon.iconProps.key}
              Icon={icon.icon}
              color={icon.iconProps.color}
              onMouseEnter={() => useHoverStateMethods.set(index)}
              onMouseLeave={() => useHoverStateMethods.reset()}
              isHovered={useHoverStateMethods.isHovered(index)}
              margin={MARGIN}
            />
          );
        })}
      </Box>
    </Box>
  );
};
