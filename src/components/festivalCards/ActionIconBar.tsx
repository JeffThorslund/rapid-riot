import { IconType } from "react-icons";
import { Box } from "grommet";
import { FaExclamationCircle, FaPlusCircle } from "react-icons/fa";
import React from "react";
import { getCardStyle } from "./_utils/getCardStyle";
import { useHoverState } from "../_utils/useHoverState";

export interface ActionIconBarProps {
  rightPosition: number;
  bottomPosition: number;
}

export const ActionIconBar = (props: ActionIconBarProps) => {
  const useHoverStateMethods = useHoverState();

  const MARGIN = 8;

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
      {useHoverStateMethods.isHovered(0) ? (
        <Box pad={{ horizontal: "medium", top: "medium", bottom: "small" }}>
          Submit a new festival.
        </Box>
      ) : useHoverStateMethods.isHovered(1) ? (
        <Box pad={"medium"}>Report outdated, or incorrect data.</Box>
      ) : null}
      <Box
        direction={"row"}
        justify={"end"}
        style={{ transition: "all ease 0.2s" }}
      >
        {[
          {
            icon: FaPlusCircle,
            color: "#3FA34D",
            key: "add",
          },
          {
            icon: FaExclamationCircle,
            color: "#ef6f6c",
            key: "delete",
          },
        ].map((icon, index) => {
          return (
            <ActionIcon
              key={icon.key}
              Icon={icon.icon}
              color={icon.color}
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

export interface ActionIconProps {
  Icon: IconType;
  color: string;
  margin: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isHovered: boolean;
}

export const ActionIcon = ({ Icon, ...props }: ActionIconProps) => {
  return (
    <Icon
      size={40}
      color={props.color}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      style={{
        margin: props.margin,
        cursor: "pointer",
        transition: "all ease 0.2s",
        transform: props.isHovered ? "scale(1.1)" : undefined,
      }}
    />
  );
};
