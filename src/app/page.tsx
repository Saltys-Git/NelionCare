import {Button} from '@nextui-org/button';
import {Image} from "@nextui-org/react";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import slide1 from "../../public/images/slide1.jpg";
import slide2 from "../../public/images/slide2.jpg";
import slide3 from "../../public/images/slide3.jpg";
import {HeartIcon, PuzzleIcon, ShieldCheckIcon} from "lucide-react";
import HomepageCarousel from '@/components/HomepageCarousel';

const slides = [
    {title:"Experience the best care for your loved ones",subTitle:"Nelioncare provides high-quality, compassionate care services that allow you to age with dignity and grace.",image:slide1,button:"Learn more",link:"/#our-services"},
    {title:"We tailor our care services to your individual needs",subTitle:"At Nelioncare, we understand that no two people are alike. That&apos;s why we take the time to get to know you and your loved ones so we can create a personalized care plan that meets your unique needs.",image:slide2,button:"Schedule a free consultation",link:"/free-consulation"},
    {title:"Quality care is our promise to you",subTitle:" We are committed to providing the highest quality care possible. Our staff is highly trained and experienced, and we are dedicated to providing a safe and nurturing environment for our residents.",image:slide3,button:"Read more",link:"/about-us"},
];

const featureCards = [
    {title:"Compassionate Care",description:"We are committed to providing compassionate care to the elderly.",icon:<HeartIcon className="h-12 w-12 text-primary-cyan"/>},
    {title:"Safe Environment",description:"We focus on creating a safe and secure environment for the residents.",icon:<ShieldCheckIcon className="h-12 w-12 text-primary-cyan"/>},
    {title:"Engaging Activities",description:"We provide engaging activities and social interaction for the residents.",icon:<PuzzleIcon className="h-12 w-12 text-primary-cyan"/>},
]

const servicesCards = [
    {name:"Visiting Care",image:"/images/service1.jpg",description:"Our tailored home care services include personal care,companionship, support with getting ready in the morning, help with meals, and light domestic duties. For further information please contact us on the email or telephone.",link:"/our-services/visiting-care"},
    {name:"Live in Care",image:"/images/service2.jpg",description:"Our live-in-care can provide you with round the clock care from a dedicated carer who lives with you in your own home. They will be handy to support you at a moments notice. Live in care is also a great support for companionship and emotional support.  For further information please contact us on the email or telephone.",link:"/our-services/live-in-care"},
    {name:"Emergency Care",image:"/images/service3.jpg",description:"You may need support at a moments notice. Our dedicated carers can be there to support you within 24 hour notice.   For further information please contact us on the email or telephone.",link:"/our-services/emergency-care"},
]

export default function Home() {
    return (
        <>
            <HomepageCarousel slides={slides}/>
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
                            <Button variant="shadow" color="secondary" className="w-full text-white">
                                <Link href="/contact-us" className="flex h-full w-full text-center justify-center items-center">
                                        Contact us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <div className="flex flex-col justify-center space-y-4 bg-white p-6 rounded-lg shadow-lg">
                            <div className="space-y-2 mb-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-fuchsia-700">
                                    Why Choose Nelion Care
                                </h2>
                            </div>
                            <div className="space-y-4">
                                <details className="space-y-2 bg-fuchsia-100 rounded-lg p-4 transform transition-transform duration-500 hover:scale-105">
                                    <summary className="flex select-none w-full items-center text-lg font-semibold text-fuchsia-700">
                                        Personalized Care
                                        <svg
                                            className="ml-auto h-5 w-5 transition-all text-fuchsia-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path clipRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd" />
                                            <path
                                                clipRule="evenodd"
                                                d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11a1 1 0 11-2 0 1 1 0 012 0z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </summary>
                                    <p className="text-fuchsia-700">
                                        We provide personalized care plans tailored to each individual&apos;s unique needs and preferences.
                                    </p>
                                </details>
                                <details className="space-y-2 bg-fuchsia-100  rounded-lg p-4 transform transition-transform duration-500 hover:scale-105">
                                    <summary className="flex select-none w-full items-center text-lg font-semibold text-fuchsia-700">
                                        Experienced Caregivers
                                        <svg
                                            className="ml-auto h-5 w-5 transition-all text-fuchsia-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path clipRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd" />
                                            <path
                                                clipRule="evenodd"
                                                d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11a1 1 0 11-2 0 1 1 0 012 0z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </summary>
                                    <p className="text-fuchsia-700">
                                        Our caregivers are highly trained and experienced in providing quality home care services.
                                    </p>
                                </details>
                                <details className="space-y-2 bg-fuchsia-100 rounded-lg p-4 transform transition-transform duration-500 hover:scale-105">
                                    <summary className="flex select-none w-full items-center text-lg font-semibold text-fuchsia-700">
                                        24/7 Support
                                        <svg
                                            className="ml-auto h-5 w-5 transition-all text-fuchsia-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path clipRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" fillRule="evenodd" />
                                            <path
                                                clipRule="evenodd"
                                                d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11a1 1 0 11-2 0 1 1 0 012 0z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </summary>
                                    <p className="text-fuchsia-700">
                                        We offer 24/7 support to ensure our clients always have someone to turn to when they need help.
                                    </p>
                                </details>
                            </div>
                        </div>
                        <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transform transition-transform duration-500 hover:scale-105">
                            <Image
                                isBlurred
                                alt="Image"
                                height="310"
                                src="/images/slide2.jpg"
                                style={{
                                    aspectRatio: "550/310",
                                    objectFit: "cover",
                                }}
                                width="550"
                            />
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
            <section id="our-services" className="w-full py-12 md:py-24 bg-gradient-to-r from-primary-cyan via-pink-500 to-primary-brown">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl mb-4">Our Services</h2>
                        <p className="max-w-[600px] mx-auto text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            At Nelion Care, we offer a range of home care services to suit your needs. Our services range from hourly visit to 24 hour care, companionship, personal care, domestic support, support to access the community, GP visits and Live in care.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 md:gap-12">
                        {servicesCards.map((data,index)=>(
                            <Link href={data.link} key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
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
            <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-900 bg-opacity-50 bg-gradient-to-r from-green-100 to-green-50 dark:from-green-800 dark:to-green-900">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter text-green-900 dark:text-green-100 sm:text-5xl">
                                    Join Our Team
                                </h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Our business is built around the amazing work our Care Givers do every day. We make sure as our caregiver you have everything you need to continue to make a difference to the lives of those we support. From regular training, mentoring and 1-1 coaching, to our top rates of pay, you’ll always feel valued and supported at Nelion Care.
                                </p>
                            </div>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-green-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-100 dark:text-green-900 dark:hover:bg-green-200 dark:focus-visible:ring-green-300"
                                href="/join-us"
                            >
                                View Open Positions
                            </Link>
                        </div>
                        <Image
                            isBlurred
                            alt="Join Our Team"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            height="310"
                            src="/images/join-us.jpg"
                            width="550"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
