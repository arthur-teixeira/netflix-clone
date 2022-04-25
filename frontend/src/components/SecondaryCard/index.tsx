import React from "react";
import { useTranslation } from "react-i18next";
import { SecondaryCardProps } from "./SecondaryCard";
import {
  Content,
  Image,
  ImageContainer,
  Subtitle,
  Text,
  Title,
  Wrapper,
} from "./styles";

const SecondaryCard = ({
  leftToRight,
  resource,
  order,
}: SecondaryCardProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Content leftToRight={leftToRight}>
        <Text>
          <Title>{t(`${order}.title`)}</Title>
          <Subtitle>{t(`${order}.subtitle`)}</Subtitle>
        </Text>
        <ImageContainer>
          <Image src={resource} />
        </ImageContainer>
      </Content>
    </Wrapper>
  );
};

export default SecondaryCard;
