// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

// Componentes
import { Button } from "../ui/button";

// Constantes & Lucide Icons
import { SocialMediaLinks } from "@/constants";
import { Mail } from "lucide-react";

const Footer = () => {
  const t = useTranslations("Layout.Footer");
  return (
    <footer
      id="contact"
      className="bg-foreground dark:bg-primary-foreground text-white scroll-m-60"
    >
      <section className="section-container py-20 flex flex-col gap-20">
        {/* Chamada principal */}
        <div className="flex flex-col items-start gap-6 text-left max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            {t.rich("headline", {
              emphasis: (chunks) => (
                <Link
                  href="mailto:gustavopp.dev@gmail.com?subject=Oportunidade de Emprego - Portfólio"
                  target="_blank"
                  className="block underline underline-offset-6 "
                >
                  {chunks}
                </Link>
              ),
            })}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            {t.rich("description", {
              nextjs: (chunks) => <strong>{chunks}</strong>,
              typescript: (chunks) => <strong>{chunks}</strong>,
              tailwind: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          <a
            href="mailto:gustavopp.dev@gmail.com?subject=Oportunidade de Emprego - Portfólio"
            target="_blank"
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary-foreground/80 transition-colors"
          >
            <Mail className="w-4 h-4" />
            gustavopp.dev@gmail.com
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
          <p className="text-sm text-muted-foreground">
            {t("credits", { year: new Date().getFullYear() })}
          </p>

          <ul className="flex items-center gap-4 lg:gap-6">
            {SocialMediaLinks.map((media) => (
              <li key={media.alt}>
                <Button
                  variant={"link"}
                  className="text-white max-sm:p-2"
                  asChild
                >
                  <Link
                    href={media.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hidden sm:block"> {media.alt}</span>
                    <Image
                      src={media.iconSrc}
                      alt={media.alt}
                      width={24}
                      height={24}
                      sizes="24px"
                      className="object-contain invert sm:hidden"
                    />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
