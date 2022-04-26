import { useTranslation } from "react-i18next";
import CollapsibleCard from "../CollapsibleCard";
import { Title, Wrapper } from "./styles";

const CollapsibleCardGroup = () => {
  const CARD_AMOUNT = 6;

  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("collapsible.card.group.title")}</Title>
      <ul>
        {Array.apply(null, Array(CARD_AMOUNT)).map((_, index) => (
          <CollapsibleCard id={index + 1} key={index + 1} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default CollapsibleCardGroup;
