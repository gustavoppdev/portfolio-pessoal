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
import { ArrowRight, Github } from "lucide-react";
import { projects } from "@/constants";

const CarouselPortfolio = () => {
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
            className="basis-[85%] lg:basis-[40%] flex flex-col gap-9"
          >
            <div className="aspect-square bg-neutral-100 grid place-content-center rounded-xl max-h-[280px] relative group">
              {index + 1}
              <span className="absolute top-3 right-3 hidden group-hover:block transition-all duration-300 ease-in-out">
                <ArrowRight className="-rotate-45 size-10 p-2 bg-white rounded-full" />
              </span>
            </div>
            <div className="space-y-2">
              <Button variant={"link"} className="text-base" asChild>
                <Link href={"https://github.com/gustavoppdev"} target="_blank">
                  <Github /> gustavoppdev
                </Link>
              </Button>
              <h4 className="text-muted-foreground px-4">{project.title}</h4>
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
