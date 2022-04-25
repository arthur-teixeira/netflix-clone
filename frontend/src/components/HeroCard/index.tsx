import { useTranslation } from "react-i18next";
import {
  Button,
  Content,
  Input,
  InputWrapper,
  Subtitle,
  Text,
  Title,
  Wrapper,
} from "./styles";

const HeroCard = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t("hero.title")}</Title>
      <Subtitle>{t("hero.subtitle")}</Subtitle>
      <Content>
        <Text>{t("hero.text")}</Text>
        <InputWrapper>
          <Input type='email' placeholder='Email' />
          <Button>{t("hero.cta")} &rsaquo;</Button>
        </InputWrapper>
      </Content>
    </Wrapper>
  );
};

export default HeroCard;
