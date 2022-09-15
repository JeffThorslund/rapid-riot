import React from "react";
import { IconType } from "react-icons";

export interface ActionIconProps {
  Icon: IconType;
  color: string;
  margin: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isHovered: boolean;
  onClick: () => void;
}

export const ActionIcon = ({ Icon, ...props }: ActionIconProps) => {
  return (
    <Icon
      size={40}
      color={props.color}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      style={{
        margin: props.margin,
        cursor: "pointer",
        transition: "all ease 0.2s",
        transform: props.isHovered ? "scale(1.1)" : undefined,
      }}
    />
  );
};
