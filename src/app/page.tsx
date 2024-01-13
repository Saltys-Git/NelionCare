"use client"
import {Button} from '@nextui-org/button';
import NextImage from "next/image";
import {Image} from "@nextui-org/react";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import slide1 from "../../public/images/slide1.jpg";
import slide2 from "../../public/images/slide2.jpg";
import slide3 from "../../public/images/slide3.jpg";
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import {Card as ShadCnCard, CardContent} from "@/components/ui/card"
import {HeartIcon, PuzzleIcon, ShieldCheckIcon} from "lucide-react";

const slides = [
    {title:"Experience the best care for your loved ones",subTitle:"Nelioncare provides high-quality, compassionate care services that allow you to age with dignity and grace.",image:slide1,button:"Learn more",link:"/our-services"},
    {title:"We tailor our care services to your individual needs",subTitle:"At Nelioncare, we understand that no two people are alike. That's why we take the time to get to know you and your loved ones so we can create a personalized care plan that meets your unique needs.",image:slide2,button:"Schedule a free consultation",link:"/contact-us"},
    {title:"Quality care is our promise to you",subTitle:" We are committed to providing the highest quality care possible. Our staff is highly trained and experienced, and we are dedicated to providing a safe and nurturing environment for our residents.",image:slide3,button:"Read more",link:"/about-us"},
];

const featureCards = [
    {title:"Compassionate Care",description:"We are committed to providing compassionate care to the elderly.",icon:<HeartIcon className="h-12 w-12 text-primary-cyan"/>},
    {title:"Safe Environment",description:"We focus on creating a safe and secure environment for the residents.",icon:<ShieldCheckIcon className="h-12 w-12 text-primary-cyan"/>},
    {title:"Engaging Activities",description:"We provide engaging activities and social interaction for the residents.",icon:<PuzzleIcon className="h-12 w-12 text-primary-cyan"/>},
]

const servicesCards = [
    {name:"Visiting Care",image:"/images/why-choose.jpg",description:"Our tailored home care services include personal care,companionship, support with getting ready in the morning, help with meals, and light domestic duties. For further information please contact us on the email or telephone.",link:"/our-services/visiting-care"},
    {name:"Live in Care",image:"/images/why-choose.jpg",description:"Our live-in-care can provide you with round the clock care from a dedicated carer who lives with you in your own home. They will be handy to support you at a moments notice. Live in care is also a great support for companionship and emotional support.  For further information please contact us on the email or telephone.",link:"/our-services/live-in-care"},
    {name:"Emergency Care",image:"/images/why-choose.jpg",description:"You may need support at a moments notice. Our dedicated carers can be there to support you within 24 hour notice.   For further information please contact us on the email or telephone.",link:"/our-services/emergency-care"},
]

export default function Home() {
    return (
        <div>
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
                                    <div className="absolute w-full h-full bg-slate-950/60 flex flex-col justify-center items-center md:items-start p-4 md:pl-20">
                                        <p className="text-slate-50 text-[16px] md:text-4xl text-center md:text-start">{data.title}</p>
                                        <p className="text-slate-50 text-[10px] md:text-base w-full md:w-1/2 my-2 text-center md:text-start">{data.subTitle}</p>
                                        <Link href={data.link}>
                                            <Button className="w-fit mt-2 bg-primary-cyan text-white">
                                                {data.button}
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </ShadCnCard>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <section className="w-full bg-primary-cyan">
                <div className="container py-12 px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="col-span-1 flex p-6 justify-center items-center">
                            <Image
                                isZoomed
                                isBlurred
                                src="/images/why-choose.jpg"
                                alt="Why Choose Us"
                                className="object-cover aspect-square w-full"
                            />
                        </div>
                        <div className="col-span-1 space-y-12 flex flex-col p-6 items-start justify-start">
                            <Label className="text-4xl font-bold text-white md:text-start text-center">More than care, a family around the clock</Label>
                            <Label className="text-base text-white text-justify">Dedicated to enriching lives, Nelion Care goes beyond quality homecare.
                                Our nationwide network of passionate CareGivers and supportive office teams work in unison to keep clients safe, independent, and thriving in their own homes.  Our nationwide network of passionate CareGivers and supportive office teams work in unison to keep clients safe, independent, and thriving in their own homes.<br/><br/>
                                For us, it&apos;s not just a service, it&apos;s a privilege to build deep connections and make a lasting difference, one life at a time.  For us, it&apos;s not just a service, it&apos;s a privilege to build deep connections and make a lasting difference, one life at a time.</Label>
                            <Button variant="shadow" color="secondary" className="w-full text-white">Contact us</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-8 md:py-16 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featureCards.map((data,index)=>(
                            <div key={index} className="flex flex-col items-center text-center">
                                {data.icon}
                                <h2 className="mt-4 text-2xl font-semibold">{data.title}</h2>
                                <p className="mt-2 text-gray-600">{data.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary-cyan via-pink-500 to-primary-brown">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl my-4">Our Services</h2>
                        <p className="max-w-[600px] mx-auto text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At Nelion Care, we offer a range of home care services to suit your needs. Our services range from hourly visit to 24 hour care, companionship, personal care, domestic support, support to access the community, GP visits and Live in care.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 md:gap-12">
                        {servicesCards.map((data,index)=>(
                            <Link href={data.link} key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                                <Image
                                    isBlurred
                                    alt={data.name}
                                    className="h-24 w-24 mb-4 object-cover rounded-full select-none"
                                    height="300"
                                    src={data.image}
                                    style={{
                                        aspectRatio: "300/300",
                                        objectFit: "cover",
                                    }}
                                    width="300"
                                />
                                <h3 className="text-xl font-bold mb-2 select-none">{data.name}</h3>
                                <p className="text-gray-500 mb-6 select-none">
                                    {data.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
