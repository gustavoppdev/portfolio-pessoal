// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Componentes
import { Button } from "@/components/ui/button";
import CarouselPortfolio from "./CarouselPortfolio";

export const Portfolio = () => {
  const t = useTranslations("Sections.Portfolio");

  return (
    <section
      id="portfolio"
      className="section-container my-32 max-md:overflow-hidden scroll-m-60"
    >
      <h3 className="mb-5 text-muted-foreground tracking-widest uppercase text-sm font-medium">
        {t("introduction")}
      </h3>
      <div className="flex flex-col gap-4 lg:gap-0 mb-12.5">
        <h2 className="text-4xl font-semibold leading-tight">
          {t("headline")}
        </h2>

        <Button variant={"link"} className="self-end" asChild>
          <Link href={"#"}>{t("seeAllBtn")}</Link>
        </Button>
      </div>

      <CarouselPortfolio />
    </section>
  );
};
