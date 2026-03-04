import { enMessages } from "./messages/en";
import { ruMessages } from "./messages/ru";
import { uzMessages } from "./messages/uz";

export const supportedLanguages = ["en", "ru", "uz"] as const;
export type AppLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: AppLanguage = "en";

export const resources = {
  en: enMessages,
  ru: ruMessages,
  uz: uzMessages,
} as const;
