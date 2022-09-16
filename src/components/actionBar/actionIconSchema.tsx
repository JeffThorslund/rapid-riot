import { FaExclamationCircle, FaPlusCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import { ActiveIndexStateMethods } from "../_utils/useActiveIndexState";
import React from "react";
import { SubmissionForm } from "../modal/SubmissionForm";

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
  form: (modalState: ActiveIndexStateMethods) => React.ReactNode;
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
    form: (modalState: ActiveIndexStateMethods) => (
      <SubmissionForm modalState={modalState} />
    ),
  },
  {
    icon: {
      component: FaExclamationCircle,
      props: {
        color: "#EF6F6C",
        key: ActionIconEnum.DELETE,
      },
    },
    tooltip: { message: "Report outdated or incorrect data." },
    form: () => <div>hi</div>,
  },
];
