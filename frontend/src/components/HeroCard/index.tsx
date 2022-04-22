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
  return (
    <Wrapper>
      <div>
        <Title>Filmes, séries e muito mais. Sem limites.</Title>
        <Subtitle>Assista onde quiser. Cancele quando quiser.</Subtitle>
        <Content>
          <Text>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </Text>
          <InputWrapper>
            <Input type='email' placeholder='Email' />
            <Button>Vamos lá &rsaquo;</Button>
          </InputWrapper>
        </Content>
      </div>
    </Wrapper>
  );
};

export default HeroCard;
