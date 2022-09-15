import { FaExclamationCircle, FaPlusCircle } from "react-icons/fa";
import { IconType } from "react-icons";

enum ActionIconEnum {
  ADD = "ADD",
  DELETE = "DELETE",
}

interface ActionIconSchema {
  icon: {
    component: IconType;
    props: {
      color: string;
      key: ActionIconEnum;
    };
  };
  tooltip: {
    message: string;
  };
}

export const actionIconSchema: ActionIconSchema[] = [
  {
    icon: {
      component: FaPlusCircle,
      props: {
        color: "#3FA34D",
        key: ActionIconEnum.ADD,
      },
    },
    tooltip: { message: "Submit a new festival" },
  },
  {
    icon: {
      component: FaExclamationCircle,
      props: {
        color: "#EF6F6C",
        key: ActionIconEnum.DELETE,
      },
    },
    tooltip: { message: "Report outdated, or incorrect data." },
  },
];
