import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCollapsibleState } from "../../store/modules/Collapsible/useCollapsibleState";
import { CollapsibleCardProps } from "./CollapsibleCard";
import { Wrapper, Button, Content } from "./styles";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const CollapsibleCard = ({ id }: CollapsibleCardProps) => {
  const { t } = useTranslation();
  const { toggleCard, current } = useCollapsibleState();
  const [isExpanded, setIsExpanded] = useState<boolean>(id === current);

  useEffect(() => {
    setIsExpanded(id === current);
  }, [current, id]);
  return (
    <>
      <Wrapper>
        <Button onClick={() => toggleCard(id)}>
          {t(`collapsible.card.${id}.title`)}
          {isExpanded ? <AiOutlineClose /> : <AiOutlinePlus />}
        </Button>
        {isExpanded && (
          <Content
            dangerouslySetInnerHTML={{
              __html: t(`collapsible.card.${id}.content`),
            }}
          />
        )}
      </Wrapper>
    </>
  );
};

export default CollapsibleCard;
