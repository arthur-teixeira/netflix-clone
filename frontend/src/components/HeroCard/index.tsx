import { useTranslation } from "react-i18next";
import EmailInput from "../EmailInput";
import { Subtitle, Title, Wrapper } from "./styles";

const HeroCard = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("hero.title")}</Title>
      <Subtitle>{t("hero.subtitle")}</Subtitle>
      <EmailInput />
    </Wrapper>
  );
};

export default HeroCard;
