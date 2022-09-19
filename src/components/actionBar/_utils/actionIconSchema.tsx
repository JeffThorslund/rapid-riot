import { FaExclamationCircle, FaPlusCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import React from "react";
import { SubmissionForm } from "../../modal/submission";
import { ReportingForm } from "../../modal/reporting";
import { ActiveIndexStateMethods } from "../../_utils/useActiveIndexState";

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
        color: "#00C781",
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
        color: "#FF4040",
        key: ActionIconEnum.DELETE,
      },
    },
    tooltip: { message: "Report outdated or incorrect data." },
    form: (modalState: ActiveIndexStateMethods) => (
      <ReportingForm modalState={modalState} />
    ),
  },
];
