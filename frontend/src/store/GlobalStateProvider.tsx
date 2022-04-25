import { createContext, useContext, useState } from "react";
import { GlobalState, GlobalStateProviderProps } from "./GlobalStateProvider.d";

const GlobalStateContext = createContext<GlobalState | null>(null);

export function GlobalStateProvider({ children }: GlobalStateProviderProps) {
  const value: GlobalState = {
    collapsibleModule: useState(-1),
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState(): GlobalState {
  const state = useContext(GlobalStateContext);
  if (!state) {
    throw new Error("useGlobalState must be within GlobalStateProvider");
  }
  return state;
}
