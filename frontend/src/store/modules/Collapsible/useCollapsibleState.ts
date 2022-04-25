import { useGlobalState } from "../../GlobalStateProvider";
import { CollapsibleHookReturn } from "./useCollapsibleState.d";

export function useCollapsibleState(): CollapsibleHookReturn {
  const { collapsibleModule } = useGlobalState();
  const [collapsible, setCollapsible] = collapsibleModule;

  const expandCard = (card: number) => {
    setCollapsible(card);
  };

  const collapseCard = () => {
    setCollapsible(-1);
  };

  return {
    current: collapsible,
    expandCard,
    collapseCard,
  };
}
