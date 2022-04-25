import { Dispatch, SetStateAction } from "react";

export type CollapsibleActionType = "collapse" | "expand";

export type CollapsibleAction = {
  type: CollapsibleActionType;
  payload: number;
};

export type CollapsibleModule = [number, Dispatch<SetStateAction<number>>];

export type CollapsibleHookReturn = {
  current?: number;
  collapseCard: () => void;
  expandCard: (card: number) => void;
};
