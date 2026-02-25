// Next-Intl
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

// Componentes
import { Button } from "@/components/ui/button";

// Constantes & Lucide Icons
import { DownloadIcon } from "lucide-react";
import { ContactWhatsappLink } from "@/constants";

const Hero = async () => {
  const t = await getTranslations("Sections.Hero");

  return (
    <section className="section-container min-h-[calc(100dvh-68px)] lg:min-h-[calc(100dvh-100px)] grid place-content-center text-center">
      <div className="flex flex-col items-center gap-8 lg:gap-12">
        <p className="text-muted-foreground">
          {t.rich("introduction", {
            linkTag: (chunks) => (
              <Button variant={"link"} className="px-1 text-base" asChild>
                <Link href={"#projects"} className="text-primary animate-pulse">
                  {chunks}
                </Link>
              </Button>
            ),
          })}
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-4xl">
          {t("headline")}
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl">
          {t.rich("description", {
            nextjs: (chunks) => (
              <span className="font-medium text-primary">{chunks}</span>
            ),
            tailwind: (chunks) => (
              <span className="font-medium text-primary">{chunks}</span>
            ),
            react: (chunks) => (
              <span className="font-medium text-primary">{chunks}</span>
            ),
          })}
        </p>
        <div className="flex items-center gap-4">
          <Button size="lg" asChild>
            <Link href={ContactWhatsappLink} passHref target="_blank">
              {t("contactBtn")}
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a
              href="/cv-gustavo-henrique.pdf"
              download="cv-gustavo-henrique.pdf"
            >
              {t("downloadCvBtn")}
              <DownloadIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
