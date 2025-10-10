// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import kvGroupLogo from "../../assets/images/clients/KV GROUP.png";
import viannaAdvLogo from "../../assets/images/clients/VIANNA ADV.png";
import facredLogo from "../../assets/images/clients/FACRED.png";
import facoacontaLogo from "../../assets/images/clients/FAÇOACONTA.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import OptimizedImage from "../OptimizedImage";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Confiam em nós",
  logos = [
    {
      id: "logo-1",
      description: "Vianna Adv",
      image: viannaAdvLogo,
      className: "h-16 w-auto transition-all duration-300",
    },
    {
      id: "logo-2",
      description: "Faço a Conta",
      image: facoacontaLogo,
      className: "h-16 w-auto transition-all duration-300",
    },
    {
      id: "logo-3",
      description: "Facred",
      image: facredLogo,
      className: "h-16 w-auto transition-all duration-300",
    },
    {
      id: "logo-4",
      description: "KV Group",
      image: kvGroupLogo,
      className: "h-16 w-auto transition-all duration-300",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            {heading}
          </h2>
        </div>
        <div className="pt-6">
          <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ 
                playOnInit: true, 
                speed: 0.5,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false
              })]}
            >
              <CarouselContent className="ml-0">
                {/* Primeira passagem das logos */}
                {logos.map((logo) => (
                  <CarouselItem
                    key={`first-${logo.id}`}
                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/4"
                  >
                    <div className="mx-8 flex shrink-0 items-center justify-center">
                      <div>
                        <OptimizedImage
                          src={logo.image}
                          alt={logo.description}
                          className={logo.className}
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
                {/* Segunda passagem das logos para loop infinito */}
                {logos.map((logo) => (
                  <CarouselItem
                    key={`second-${logo.id}`}
                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/4"
                  >
                    <div className="mx-8 flex shrink-0 items-center justify-center">
                      <div>
                        <OptimizedImage
                          src={logo.image}
                          alt={logo.description}
                          className={logo.className}
                          width={64}
                          height={64}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
