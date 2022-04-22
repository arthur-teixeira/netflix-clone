import {
  LanguageOption,
  LanguageSelect,
  Logo,
  SignInButton,
  SubWrapper,
  Wrapper,
} from "./styles";
import netflixLogo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Logo src={netflixLogo}></Logo>
      <SubWrapper>
        <LanguageSelect>
          <LanguageOption value='PT-br'>Português</LanguageOption>
          <LanguageOption value='EN-us'>Inglês</LanguageOption>
        </LanguageSelect>
        <SignInButton>Entrar</SignInButton>
      </SubWrapper>
    </Wrapper>
  );
};

export default Header;
