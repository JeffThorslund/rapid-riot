import { FaExclamationCircle, FaPlusCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import React from "react";
import { Reporting } from "../../modal/Reporting";
import { Submission } from "../../modal/Submission";

enum ActionIconEnum {
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface ActionIconSchema {
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
  form: (onClose: () => void) => React.ReactNode;
}

export const actionIconSchema: ActionIconSchema[] = [
  {
    icon: {
      component: FaPlusCircle,
      props: {
        color: "#00C781",
        key: ActionIconEnum.ADD,
      },
    },
    tooltip: { message: "Submit a new festival" },
    form: (closeModal: () => void) => <Submission closeModal={closeModal} />,
  },
  {
    icon: {
      component: FaExclamationCircle,
      props: {
        color: "#FF4040",
        key: ActionIconEnum.DELETE,
      },
    },
    tooltip: { message: "Report outdated or incorrect data." },
    form: (closeModal: () => void) => <Reporting closeModal={closeModal} />,
  },
];
