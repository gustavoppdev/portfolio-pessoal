import {
  emailIcon,
  githubIcon,
  linkedinIcon,
  projectRachelStoneImg,
  projectSkillbridgeImg,
  projectSquareUpImg,
  projectTailwindStoreImg,
  whatsappIcon,
} from "@/assets";
import {
  LocalesArrayType,
  NavigationLink,
  ProjectType,
  ServiceStat,
  SocialMediaLink,
  Stacks,
} from "@/types";
import {
  LayersIcon,
  MonitorSmartphoneIcon,
  ServerIcon,
  SparklesIcon,
} from "lucide-react";

// Array para LanguageSwitcher.tsx
export const LocalesArray: LocalesArrayType[] = [
  {
    key: "pt",
    labelKey: "portuguese",
  },
  {
    key: "en",
    labelKey: "english",
  },
];

// Links de Navegação - NavigationBar - Mobile
export const NavigationLinks: NavigationLink[] = [
  { href: "/#services", labelKey: "links.services" },
  { href: "/#about", labelKey: "links.about" },
  { href: "/#portfolio", labelKey: "links.portfolio" },
  { href: "/#contact", labelKey: "links.contact" },
];

// Serviços - Services.tsx
export const ServicesStats: ServiceStat[] = [
  {
    icon: MonitorSmartphoneIcon,
    title: "services.0.title",
    description: "services.0.description",
  },
  {
    icon: LayersIcon,
    title: "services.1.title",
    description: "services.1.description",
  },
  {
    icon: SparklesIcon,
    title: "services.2.title",
    description: "services.2.description",
  },
  {
    icon: ServerIcon,
    title: "services.3.title",
    description: "services.3.description",
  },
];

// Stack e Conhecimentos Principais - About.tsx
export const MainStacks: Stacks = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Shadcn/ui",
  "next-intl",
];

// Stack e Conhecimentos Secundários - About.tsx
export const SecondaryStacks: Stacks = [
  "Sass",
  "Vite",
  "Auth.js",
  "Scrum/Kanban",
  "TanStack Query",
];

// Projetos - Portfolio.tsx
export const projects: ProjectType[] = [
  {
    title: "projects.rachel-stone.title",
    description: "projects.rachel-stone.description",
    link: "https://rachelstone-landing-page.vercel.app/",
    imageSrc: projectRachelStoneImg,
  },
  {
    title: "projects.tailwind-store.title",
    description: "projects.tailwind-store.description",
    link: "https://e-commerce-tailwind-rosy.vercel.app/",
    imageSrc: projectTailwindStoreImg,
  },
  {
    title: "projects.skillbridge.title",
    description: "projects.skillbridge.description",
    link: "https://skillbrigde.vercel.app/",
    imageSrc: projectSkillbridgeImg,
  },
  {
    title: "projects.square-up.title",
    description: "projects.square-up.description",
    link: "https://squareup-ten.vercel.app/",
    imageSrc: projectSquareUpImg,
  },
];

// Projetos Concluídos - Services.tsx
export const CompleteProjets: string = projects.length + "+";

// Social Medias - Footer.tsx / Contato
export const SocialMediaLinks: SocialMediaLink[] = [
  {
    href: "https://wa.me/16992375781",
    alt: "WhatsApp",
    iconSrc: whatsappIcon,
  },
  {
    href: "mailto:gustavopp.dev@gmail.com?subject=Oportunidade de Emprego - Portfólio",
    alt: "E-mail",
    iconSrc: emailIcon,
  },
  {
    href: "https://www.linkedin.com/in/seu-perfil",
    alt: "Linkedin",
    iconSrc: linkedinIcon,
  },
  {
    href: "https://github.com/gustavoppdev",
    alt: "GitHub",
    iconSrc: githubIcon,
  },
];
