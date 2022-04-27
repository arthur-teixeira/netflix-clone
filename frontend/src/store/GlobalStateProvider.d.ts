import { LanguageModule } from "./modules/Language/useLanguageState.d";
import { ReactNode } from "react";
import { CollapsibleModule } from "./modules/Collapsible/useCollapsibleState.d";

export type GlobalStateProviderProps = {
  children?: ReactNode;
};

export type GlobalState = {
  collapsibleModule: CollapsibleModule;
  languageModule: LanguageModule;
};
