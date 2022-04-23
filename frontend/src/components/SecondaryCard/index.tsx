import React from "react";
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
  subtitle,
  title,
}: SecondaryCardProps) => {
  return (
    <Wrapper>
      <Content leftToRight={leftToRight}>
        <Text>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Text>
        <ImageContainer>
          <Image src={resource} />
        </ImageContainer>
      </Content>
    </Wrapper>
  );
};

export default SecondaryCard;
