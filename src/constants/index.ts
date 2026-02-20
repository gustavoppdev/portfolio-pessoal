import { LocalesArrayType, NavigationLink, ServiceStat, Stacks } from "@/types";
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

// Projetos Concluídos - Services.tsx
export const completeProjets: string = "4+";

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
export const projects = [
  {
    title: "Project 1",
    description: "Description 1",
    link: "https://github.com/gustavoppdev",
  },
  {
    title: "Project 2",
    description: "Description 2",
    link: "https://github.com/gustavoppdev",
  },
  {
    title: "Project 3",
    description: "Description 3",
    link: "https://github.com/gustavoppdev",
  },
];
