"use client"
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {Card as ShadCnCard, CardContent} from "@/components/ui/card"
import NextImage, { StaticImageData } from "next/image";
import {Button} from '@nextui-org/button';
import Link from "next/link";

interface HomepageCarouselProp {
    slides:{title: string, subTitle: string, image: StaticImageData, button: string, link: string}[]
}

export default function HomepageCarousel({slides}:HomepageCarouselProp){
    return(
        <Carousel className="w-full"
                  opts={{
                      align: "start",
                      loop: true
                  }}
                  plugins={[
                      Autoplay({
                          delay: 2000,
                      }),
                  ]}>
            <CarouselContent>
                {slides.map((data, index) => (
                    <CarouselItem key={index}>
                        <ShadCnCard className="rounded-none w-full">
                            <CardContent className="relative aspect-[16/11] sm:aspect-[16/6] w-full p-0">
                                <NextImage src={data.image} alt={data.title} fill className="object-cover"/>
                                <div className="absolute w-full h-full bg-slate-950/60">
                                    <div className="container w-full h-full flex flex-col justify-center items-center md:items-start p-4 md:pl-20">
                                        <p className="text-slate-50 text-[16px] md:text-4xl text-center md:text-start select-none">{data.title}</p>
                                        <p className="text-slate-50 text-[10px] md:text-base w-full md:w-1/2 my-2 text-center md:text-start select-none">{data.subTitle}</p>
                                        <Button className="w-fit mt-2 bg-primary-cyan text-white">
                                            <Link href={data.link} className="flex h-full w-full text-center justify-center items-center select-none">
                                                {data.button}
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </ShadCnCard>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}