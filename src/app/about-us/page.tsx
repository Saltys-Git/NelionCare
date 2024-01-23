import {Label} from "@/components/ui/label";
import {Button, Image} from "@nextui-org/react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'About us - Nelion Care - Bringing the best Home Care to your home',
    description: 'We are a family run Homecare Service provider dedicated to delivery of expert and compassionate person centred care in the comfort of you own home in Derbyshire, Nottinghamshire, Staffordshire and neigbouring counties.',
}
const missionPoints = [
    "Setting the strategic direction of the company and ensuring its long-term success.",
    "Fostering a culture of compassion, respect, and professionalism within the team.",
    "Building strong relationships with clients, families, and stakeholders.",
    "Continuously seeking new ways to improve the quality of our services."
]

export default function Home() {
    return (
        <>
            <section
                className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover">
                <div className="w-full h-full bg-gray-700/70 flex flex-col justify-center items-center">
                    <Label className="text-4xl font-bold text-center text-white ">About us</Label>
                    <p className="text-sm mt-2 text-center text-white">We are Home Care Service providers for
                        vulnerable adults in Derbyshire and Nottinghamshire.<br/>We deliver compassionate care and
                        support for you and your loved ones when you need it most.</p>
                </div>
            </section>
            <section className="w-full px-6 py-16 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                <div className="container grid gap-10 md:grid-cols-2">
                    <div className="mx-auto items-center justify-start flex relative">
                        <Image
                            isZoomed
                            isBlurred
                            alt="Image"
                            className="aspect-video rounded-xl object-cover"
                            src="/images/service2.jpg"
                        />
                    </div>
                    <div className="flex flex-col justify-start space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h2>
                            <div className="flex flex-row items-center space-x-2 my-2">
                                <Separator className="w-[50px] h-[2px] bg-primary-cyan"/>
                                <Label className="text-sm">Weaving Quality and Compassion into Home Care</Label>
                            </div>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Nelion Care was founded on the belief that everyone deserves to live with dignity and independence, regardless of age or health challenges. We are driven by a passion for making a positive difference in the lives of our clients and their families. Our story is one of continuous growth and innovation, as we strive
                                to stay at the forefront of the home care industry and provide the best possible care for those who need it most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="h-fit w-full bg-[url('../../public/images/about3.jpg')] bg-fixed bg-center bg-cover">
                <div className="w-full h-full bg-gray-700/80 flex flex-col justify-center items-center">
                    <div className="container grid md:grid-cols-2 items-center justify-between">
                        <div className="md:p-24 p-12 w-full h-full flex flex-col justify-center items-center">
                            <Label className="text-4xl font-bold text-center text-white ">Our Mission</Label>
                            <Separator className="w-[50px] h-[2px] bg-primary-cyan mt-2 mb-2"/>
                            <p className="text-sm mt-2 text-center text-white">Deliver personalized, compassionate support with unwavering dedication, fueled by the passion of our people and the promise of a brighter future.
                            </p>
                        </div>
                        <div className="md:p-24 p-12 w-full h-full flex flex-col justify-center items-center">
                            <Label className="text-4xl font-bold text-center text-white ">Our Vision</Label>
                            <Separator className="w-[50px] h-[2px] bg-primary-cyan mt-2 mb-2"/>
                            <p className="text-sm mt-2 text-center text-white">Weave quality and innovation into every thread of care, empowering individuals to shine with independence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 via-blue-200 to-indigo-200">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <div className="mx-auto object-center w-full lg:order-last animate-slideInRight h-full">
                            <Image
                                isZoomed
                                isBlurred
                                alt="Image"
                                className="rounded-xl object-cover aspect-auto h-[600px]"
                                src="/images/service2.jpg"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4 animate-slideInLeft">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Management</h2>
                                <div className="flex flex-row items-center space-x-2 my-2">
                                    <Separator className="w-[50px] h-[2px] bg-primary-cyan"/>
                                    <Label className="text-sm">Leading with Passion and Expertise</Label>
                                </div>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    At Nelion Care, we believe strong leadership is essential for delivering exceptional care. Our management team is comprised of experienced professionals who share a deep commitment to quality, innovation, and client well-being.
                                    <br/>
                                    They bring a wealth of knowledge and experience from diverse backgrounds, including nursing, social care, and business management. They are dedicated to:
                                </p>
                                <div className="flex flex-col py-4 ml-4 md:ml-8 space-y-2">
                                    {missionPoints.map((data,index)=>(
                                        <div key={index} className="flex flex-row items-center space-x-2">
                                            <svg
                                                className="flex-none h-5 w-5 transition-all text-fuchsia-700"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path clipRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                                      fillRule="evenodd"/>
                                                <path
                                                    clipRule="evenodd"
                                                    d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11a1 1 0 11-2 0 1 1 0 012 0z"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                                {data}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Our leadership team is passionate about making Nelion Care the premier choice for home care in the region.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200">
                <div className="container w-full px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-items-start gap-6 lg:gap-12">
                        <div className="mx-auto items-center sm:w-[45%] justify-start flex relative">
                            <Image
                                isZoomed
                                isBlurred
                                alt="Image"
                                className="rounded-xl object-cover aspect-auto h-[550px]"
                                src="/images/service2.jpg"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4 sm:w-[55%]">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Staff</h2>
                                <div className="flex flex-row items-center space-x-2 my-2">
                                    <Separator className="w-[50px] h-[2px] bg-primary-cyan"/>
                                    <Label className="text-sm">The Heartbeat of Nelion Care</Label>
                                </div>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    The heart of Nelion Care is our dedicated team of care professionals. Our staff are compassionate, highly skilled, and committed to providing the highest quality of care. We invest in ongoing training and development to ensure our staff are equipped with the knowledge and skills necessary to meet the diverse needs of our clients. We believe in creating a supportive and rewarding work environment that attracts and retains the best talent in the industry.
                                    <br/><br/>
                                    By incorporating these elements into your vision and mission, you can effectively communicate the core values and aspirations of Nelion Care to potential clients, staff, and partners. Remember to tailor the specific details to your unique strengths and offerings to create a compelling and authentic narrative that resonates with your audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-6 py-16 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                <div className="container flex flex-col items-center ">
                    <Label className="text-4xl font-bold text-center">Why Nelion Care Givers</Label>
                    <Separator className="w-[200px] h-[2px] bg-primary-cyan mb-12 mt-4"/>
                    <div className="grid gap-10 lg:grid-cols-3">
                        <div className="flex flex-col items-center text-center">
                            <Image
                                isBlurred
                                alt={"Quality at Nelion"}
                                className="h-24 w-24 mb-4 object-cover rounded-full select-none"
                                height="300"
                                src={"/images/service1.jpg"}
                                style={{
                                    aspectRatio: "300/300",
                                    objectFit: "cover",
                                }}
                                width="300"
                            />
                            <h3 className="text-lg font-bold mb-2">Quality at Nelion</h3>
                            <p className="text-gray-600">
                                At Nelion Care, we weave quality into everything we do. Quality can be seen in the continuous development
                                of our teams and services we provide.   Quality means always striving to lead the way in the provision of the
                                care and support we deliver to you. Quality can also be found in the way we take an innovative approach,
                                finding new and different ways to shape our care and support.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image
                                isBlurred
                                alt={"Maintaining our standards"}
                                className="h-24 w-24 mb-4 object-cover rounded-full select-none"
                                height="300"
                                src={"/images/service1.jpg"}
                                style={{
                                    aspectRatio: "300/300",
                                    objectFit: "cover",
                                }}
                                width="300"
                            />
                            <h3 className="text-lg font-bold mb-2">Maintaining our standards</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                At Nelion Care, our standard of care is extremely important to us.
                                Our compassionate, highly skilled and dedicated Care team  work together
                                with you and those who support you to ensure quality and timely care delivery.
                                We listen to you to understand what is important to you and support you to maintain
                                it. It is your care so we value your choices.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Image
                                isBlurred
                                alt={"Taking a collaborative approach"}
                                className="h-24 w-24 mb-4 object-cover rounded-full select-none"
                                height="300"
                                src={"/images/service1.jpg"}
                                style={{
                                    aspectRatio: "300/300",
                                    objectFit: "cover",
                                }}
                                width="300"
                            />
                            <h3 className="text-lg font-bold mb-2">Taking a collaborative approach</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                At Nelion Care, we believe in shaping our care and support around each individual
                                we support.. We take an inclusive approach when it comes to your care. It is tailored
                                around you as an individual. We want to empower the people we support to have a voice
                                in how their care is delivered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center animate-fadeInUp">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Interested our service?
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            We&apos;re here to help and answer any question you might have. We are looking forward to hear from you.
                        </p>
                        <Button variant="shadow" color="secondary" className="my-8">
                            <Link href="/contact-us" className="flex h-full w-full text-center justify-center items-center">
                                Please Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
