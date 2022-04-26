import { useGlobalState } from "../../GlobalStateProvider";
import { CollapsibleHookReturn } from "./useCollapsibleState.d";

export function useCollapsibleState(): CollapsibleHookReturn {
  const { collapsibleModule } = useGlobalState();
  const [collapsible, setCollapsible] = collapsibleModule;

  const toggleCard = (card: number) => {
    if (collapsible === card) {
      setCollapsible(-1);
    } else {
      setCollapsible(card);
    }
  };

  return {
    current: collapsible,
    toggleCard,
  };
}
