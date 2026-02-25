// Next-Intl
import { Link } from "@/i18n/navigation";

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Constantes & Lucide Icons
import { ArrowRight } from "lucide-react";
import { projects } from "@/constants";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CarouselPortfolio = () => {
  const t = useTranslations("Sections.Portfolio");
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="space-x-4 lg:space-x-8">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="basis-[85%] lg:basis-[40%] flex flex-col gap-9 group relative"
          >
            <div className="relative aspect-720/437 w-full rounded-xl overflow-hidden group-hover:opacity-90 transition-all duration-300 ease-in-out  ">
              <Image
                src={project.imageSrc}
                alt={t(project.title)}
                placeholder="blur"
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 514px, (max-width: 1024px) 582px, (max-width: 1280px) 368px, (max-width: 1536px) 438px, 540px"
                className="object-cover"
              />
            </div>
            <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <ArrowRight className="-rotate-45 size-10 p-2 bg-primary-foreground rounded-full" />
            </span>

            <div className="space-y-2">
              <Button variant={"link"} className="text-base" asChild>
                <Link
                  href={project.link}
                  target="_blank"
                  className="after:absolute after:inset-0"
                >
                  {t(project.title)}
                </Link>
              </Button>
              <p className="text-muted-foreground px-4">
                {t(project.description)}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselPortfolio;
