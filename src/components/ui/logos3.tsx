"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
}

const Logos3 = ({ heading = "Trusted by these companies", logos = [] }: Logos3Props) => {
  return (
    <section className="py-0">
      {heading && (
        <div className="flex flex-col items-center text-center mb-8">
          <p className="text-xs font-bold tracking-[2.5px] uppercase" style={{ color: "var(--wsh-muted)" }}>
            {heading}
          </p>
        </div>
      )}
      <div className="relative mx-auto flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="mx-8 flex shrink-0 items-center justify-center py-2">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                    style={{ filter: "grayscale(100%) opacity(0.55)", transition: "filter 0.3s ease" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%) opacity(1)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%) opacity(0.55)")}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export { Logos3 };
