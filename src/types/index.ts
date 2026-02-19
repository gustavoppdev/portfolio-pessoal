import { routingLocales } from "@/i18n/routing";

type TranslationKey = string;

export type LocaleType = (typeof routingLocales)[number];

export type LocalesArrayType = {
  key: LocaleType;
  labelKey: TranslationKey;
};
