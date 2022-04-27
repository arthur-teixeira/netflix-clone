import { Logo, SignInButton, SubWrapper, Wrapper } from "./styles";
import netflixLogo from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Logo src={netflixLogo}></Logo>
      <SubWrapper>
        <LanguageSelect />
        <SignInButton>{t("select.sign")}</SignInButton>
      </SubWrapper>
    </Wrapper>
  );
};

export default Header;
