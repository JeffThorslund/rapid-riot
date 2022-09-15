import { IconType } from "react-icons";
import { Box } from "grommet";
import { FaExclamationCircle, FaPlusCircle } from "react-icons/fa";
import React, { useState } from "react";
import { getCardStyle } from "./_utils/getCardStyle";

export interface ActionIconBarProps {
  rightPosition: number;
  bottomPosition: number;
}

export const ActionIconBar = (props: ActionIconBarProps) => {
  const MARGIN = 10;

  return (
    <Box
      direction={"row"}
      background={"#444444"}
      round={"large"}
      style={{
        position: "absolute",
        zIndex: Number.MAX_SAFE_INTEGER,
        right: props.rightPosition,
        bottom: props.bottomPosition,
        ...getCardStyle(false),
      }}
    >
      <ActionIcon Icon={FaPlusCircle} color={"#3FA34D"} margin={MARGIN} />
      <ActionIcon
        Icon={FaExclamationCircle}
        color={"#ef6f6c"}
        margin={MARGIN}
      />
    </Box>
  );
};

export interface ActionIconProps {
  Icon: IconType;
  color: string;
  margin: number;
}

export const ActionIcon = ({ Icon, ...props }: ActionIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Icon
      size={40}
      color={props.color}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        margin: props.margin,
        cursor: "pointer",
        transition: "all ease 0.2s",
        transform: isHovered ? "scale(1.1)" : undefined,
      }}
    />
  );
};
