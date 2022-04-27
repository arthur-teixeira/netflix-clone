import { Dispatch, SetStateAction } from "react";

export type Language = "pt" | "en";

export type LanguageModule = [Language, Dispatch<SetStateAction<Language>>];

export type LanguageHookReturn = {
  availableLanguages: Language[];
  language: Language;
  changeLanguage: (language: Language) => void;
};
