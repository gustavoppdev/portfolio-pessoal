// Next-Intl
import { useTranslations } from "next-intl";

// Constantes
import { completeProjets, ServicesStats } from "@/constants";

// Componentes
import ServiceCard from "./ServiceCard";

export const Services = () => {
  const t = useTranslations("Sections.Services");
  return (
    <section
      id="services"
      className="section-container grid grid-cols-1 xl:grid-cols-2 gap-14 my-16 xl:my-20 items-center scroll-m-60"
    >
      {/* Texto principal */}
      <div className="flex flex-col gap-8 max-w-xl">
        <div className="space-y-3">
          <h2 className="text-muted-foreground tracking-widest uppercase text-sm font-medium">
            {t("introduction")}
          </h2>
          <h3 className="text-4xl font-semibold leading-tight">
            {t("headline")}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {t.rich("description", {
              nextjs: (chunks) => <strong>{chunks}</strong>,
              typescript: (chunks) => <strong>{chunks}</strong>,
              tailwind: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </div>

        <div>
          <p className="font-semibold text-3xl md:text-4xl text-primary">
            {completeProjets}
          </p>
          <p className="text-muted-foreground">{t("completeProjects")}</p>
        </div>
      </div>

      {/* Cards de Serviços */}
      <div className="grid sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {ServicesStats.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};
