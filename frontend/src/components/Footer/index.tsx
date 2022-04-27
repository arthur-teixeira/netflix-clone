import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect";
import footerItems from "./footerItems";
import {
  FooterBottom,
  FooterTop,
  FooterTopic,
  FooterTopicList,
  Wrapper,
} from "./styles";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <FooterTop>{t("footer.doubts")}</FooterTop>
      <FooterTopicList>
        {footerItems.map((item) => (
          <FooterTopic>{t(`footer.${item}`)}</FooterTopic>
        ))}
      </FooterTopicList>
      <LanguageSelect />
      <FooterBottom>{t("footer.trademark")}</FooterBottom>
    </Wrapper>
  );
};

export default Footer;
