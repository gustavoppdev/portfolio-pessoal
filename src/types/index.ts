import { routingLocales } from "@/i18n/routing";
import { LucideProps } from "lucide-react";
import { StaticImageData } from "next/image";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// Tipo para chave de tradução do next-intl
type TranslationKey = string;

// Tipo para os locales/idiomas do site
export type LocaleType = (typeof routingLocales)[number];

// Tipo para locale/idiomas do site, com uma label do idioma
export type LocalesArrayType = {
  key: LocaleType;
  labelKey: TranslationKey;
};

// Tipo para links de navegação
export type NavigationLink = {
  href: string;
  labelKey: TranslationKey;
};

// Tipo para estatísticas de serviços
export type ServiceStat = {
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
  title: TranslationKey;
  description: TranslationKey;
};

// Tipo para stack e conhecimentos
export type Stacks = string[];

// Tipo para link de contato
export type SocialMediaLink = {
  href: string;
  alt: string;
  iconSrc: StaticImageData;
};
