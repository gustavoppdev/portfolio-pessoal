import { MainStacks, SecondaryStacks } from "@/constants";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("Sections.About");
  return (
    <section id="about" className="section-container my-32 scroll-m-60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* COLUNA ESQUERDA: Título e Subtítulo */}
        <div className="max-w-lg lg:max-w-none mr-auto lg:mx-0">
          <h3 className="text-muted-foreground tracking-widest uppercase text-sm font-medium">
            {t("introduction")}
          </h3>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-snug text-foreground mt-3">
            {t("headline")}
          </h2>
        </div>

        {/* COLUNA DIREITA: Conteúdo Principal e Habilidades */}
        <div className=" space-y-8 text-lg text-foreground/80 max-w-3xl mx-auto lg:mx-0">
          {/* Parágrafo de Introdução */}
          <p className="text-2xl font-light text-foreground leading-relaxed">
            {t.rich("paragraphIntroduction", {
              emphasis: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          {/* Parágrafo de Detalhe */}
          <p className="text-lg">
            {t.rich("details", {
              emphasis: (chunks) => <strong>{chunks}</strong>,
              emphasis1: (chunks) => <strong>{chunks}</strong>,
              emphasis2: (chunks) => <strong>{chunks}</strong>,
              emphasis3: (chunks) => <strong>{chunks}</strong>,
              emphasis4: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          {/* Parágrafo de Habilidades */}
          <p className="text-lg">
            {t.rich("skills", {
              emphasis1: (chunks) => <strong>{chunks}</strong>,
              emphasis2: (chunks) => <strong>{chunks}</strong>,
              emphasis3: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>

          {/* Bloco de Destaque */}
          <div className="pt-6">
            <h4 className="text-xl font-semibold text-primary mb-4">
              {t("stacks")}
            </h4>
            <div className="flex flex-wrap gap-3">
              {/* Stack principal */}
              {MainStacks.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-sm font-medium border border-primary/50 text-primary rounded-full bg-primary/5"
                >
                  {skill}
                </span>
              ))}
              {/* Conhecimentos secundários */}
              {SecondaryStacks.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-sm font-medium border border-border/70 text-foreground/70 rounded-full bg-muted/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
