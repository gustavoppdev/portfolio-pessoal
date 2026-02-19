"use client";

// React
import { useState } from "react";

// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Componentes
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { ModeToggle } from "../common/ModeToggle";
import LanguageSwitcher from "../common/LanguageSwitcher";

// Lucide Icons & Constantes
import { MenuIcon } from "lucide-react";
import { NavigationLinks } from "@/constants";

const NavigationBarMobile = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Layout.NavigationBar");

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="flex lg:hidden">
      <Sheet open={open} onOpenChange={handleClick}>
        <SheetTrigger asChild>
          <Button
            variant={"ghost"}
            onClick={handleClick}
            className="max-sm:pr-0!"
            aria-label="Menu Mobile"
          >
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only"></SheetDescription>
        </SheetHeader>

        <SheetContent className="pt-15">
          <ul className="flex flex-col gap-4 border-b pb-4">
            {NavigationLinks.map((link) => (
              <li key={link.labelKey}>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={link.href} onClick={handleClick}>
                    {t(link.labelKey)}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>

          <ModeToggle layout="textOnly" />
          <LanguageSwitcher layout="textOnly" />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavigationBarMobile;
