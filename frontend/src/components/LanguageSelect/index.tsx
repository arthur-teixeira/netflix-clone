import { useTranslation } from "react-i18next";
import { useLanguageState } from "../../store/modules/Language/useLanguageState";
import { Select, Option } from "./styles";

const LanguageSelect = () => {
  const {
    availableLanguages,
    changeLanguage,
    language: selectedLanguage,
  } = useLanguageState();
  const { t } = useTranslation();

  const handleChange = (e: any) => {
    changeLanguage(e.target.value);
  };

  return (
    <Select onChange={handleChange}>
      {availableLanguages.map((language) => (
        <Option
          key={language}
          value={language}
          selected={language === selectedLanguage}
        >
          {t(`select.${language}`)}
        </Option>
      ))}
    </Select>
  );
};

export default LanguageSelect;
