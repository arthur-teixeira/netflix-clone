import { ReactNode } from "react";
import { CollapsibleModule } from "./modules/Collapsible/useCollapsibleState.d";

export type GlobalStateProviderProps = {
  children?: ReactNode;
};

export type GlobalState = {
  collapsibleModule: CollapsibleModule;
};
