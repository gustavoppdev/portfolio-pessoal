// Componentes
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Next-Intl
import { useTranslations } from "next-intl";

// Tipos
import { ServiceStat } from "@/types";

type Props = {
  service: ServiceStat;
};

const ServiceCard = ({ service }: Props) => {
  const t = useTranslations("Sections.Services");
  const Icon = service.icon;

  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4">
        <span className="rounded-xl p-3 bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
        <CardTitle className="text-lg font-semibold">
          {t(service.title)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t(service.description)}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
