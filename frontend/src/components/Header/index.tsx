import {
  LanguageOption,
  LanguageSelect,
  Logo,
  SignInButton,
  SubWrapper,
  Wrapper,
} from "./styles";
import netflixLogo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const handleChange = (e: any) => {
    changeLanguage(e.target.value);
  };

  return (
    <Wrapper>
      <Logo src={netflixLogo}></Logo>
      <SubWrapper>
        <LanguageSelect onChange={handleChange}>
          <LanguageOption value='pt'>{t("select.portuguese")}</LanguageOption>
          <LanguageOption value='en'>{t("select.english")}</LanguageOption>
        </LanguageSelect>
        <SignInButton>{t("select.sign")}</SignInButton>
      </SubWrapper>
    </Wrapper>
  );
};

export default Header;
