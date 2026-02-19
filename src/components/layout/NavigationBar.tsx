// Next.js & Next-Intl
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// Componentes
import { ModeToggle } from "../common/ModeToggle";
import { Button } from "../ui/button";
import LanguageSwitcher from "../common/LanguageSwitcher";
import NavigationBarMobile from "./NavigationBarMobile";

// Lucide Icons & Constantes
import { MailIcon } from "lucide-react";
import { NavigationLinks } from "@/constants";

const NavigationBar = async () => {
  const t = await getTranslations("Layout.NavigationBar");

  return (
    <header>
      <nav className="section-container flex items-center justify-between py-4 md:py-8">
        <Button variant={"link"} asChild>
          <Link href={"/"}>
            <MailIcon className="size-5" />
            gustavopp.dev@gmail.com
          </Link>
        </Button>

        <ul className="hidden lg:flex items-center gap-4">
          {NavigationLinks.map((link) => (
            <li key={link.labelKey}>
              <Button variant={"link"} asChild>
                <Link href={link.href}>{t(link.labelKey)}</Link>
              </Button>
            </li>
          ))}

          <li>
            <LanguageSwitcher layout="iconOnly" />
          </li>
          <li>
            <ModeToggle layout="iconOnly" />
          </li>
        </ul>

        <NavigationBarMobile />
      </nav>
    </header>
  );
};

export default NavigationBar;
