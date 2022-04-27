import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../../GlobalStateProvider";
import { Language, LanguageHookReturn } from "./useLanguageState.d";

export function useLanguageState(): LanguageHookReturn {
  const {
    i18n: { changeLanguage },
  } = useTranslation();
  const { languageModule } = useGlobalState();
  const [language, setLanguage] = languageModule;

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  const availableLanguages: Language[] = ["pt", "en"];

  return {
    availableLanguages,
    language,
    changeLanguage: setLanguage,
  };
}
