import {Button, Image} from "@nextui-org/react";
import Link from "next/link";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Visiting Care Service - Nelion Care - Bringing the best Home Care to your home',
    description: 'We are a family run Homecare Service provider dedicated to delivery of expert and compassionate person centred care in the comfort of you own home in Derbyshire, Nottinghamshire, Staffordshire and neigbouring counties.',
}

export default function VisitingCare() {
  return (
    <>
        <section className="w-full bg-[url('../../public/images/service1.jpg')] bg-center bg-cover">
            <div className="w-full h-full bg-gray-500/80">
                <div className="py-12 md:py-24 lg:py-32 w-full h-full px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fadeInDown">
                                Visiting Care
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl animate-fadeInUp">
                                Providing tailored home care services to meet your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 via-blue-200 to-indigo-200">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="mx-auto object-center sm:w-full lg:order-last animate-slideInRight">
                        <Image
                            isZoomed
                            isBlurred
                            alt="Image"
                            className="aspect-video rounded-xl object-cover"
                            height="310"
                            src="/images/service1.jpg"
                            width="550"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-4 animate-slideInLeft">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Personal Care
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Personalized Care for Your Loved Ones
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We provide personal care services tailored to the needs of your loved ones. Our team is dedicated to
                                ensuring that your loved ones receive the care they need in the comfort of their own home.
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
                            className="aspect-video rounded-xl object-cover"
                            src="/images/service1.jpg"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-4 sm:w-[55%]">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Companionship
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Companionship for Your Loved Ones</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We understand the importance of companionship. Our team is dedicated to providing companionship
                                services to your loved ones, ensuring they never feel alone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-fuchsia-200 via-pink-200 to-red-200">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="mx-auto object-center sm:w-full lg:order-last animate-slideInRight">
                        <Image
                            isZoomed
                            isBlurred
                            alt="Image"
                            className="aspect-video rounded-xl object-cover"
                            height="310"
                            src="/images/service1.jpg"
                            width="550"
                        />
                    </div>
                    <div className="flex flex-col justify-center space-y-4 animate-slideInLeft">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Domestic Duties
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Light Domestic Duties for Your Loved Ones
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We provide light domestic duties to help your loved ones maintain a clean and comfortable living
                                environment. Our team is dedicated to ensuring that your loved ones can enjoy their home without the
                                stress of household chores.
                            </p>
                        </div>
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
