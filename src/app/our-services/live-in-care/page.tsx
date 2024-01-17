import {Button, Image} from "@nextui-org/react";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Live in Care Service - Nelion Care - Bringing the best Home Care to your home',
    description: 'We are a family run Homecare Service provider dedicated to delivery of expert and compassionate person centred care in the comfort of you own home in Derbyshire, Nottinghamshire, Staffordshire and neigbouring counties.',
}
export default function LiveInCare() {
  return (
      <div>
          <section className="w-full bg-[url('../../public/images/service1.jpg')] bg-center bg-cover">
              <div className="container py-12 md:py-24 lg:py-32 w-full h-full px-4 md:px-6 bg-gray-500/80">
                  <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="space-y-2">
                          <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fadeInDown">
                              Live in Care
                          </h1>
                          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl animate-fadeInUp">
                              Your Comfort, Around the Clock.
                          </p>
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
                              src="/images/service2.jpg"
                              width="550"
                          />
                      </div>
                      <div className="flex flex-col justify-center space-y-4 animate-slideInLeft">
                          <div className="space-y-2">
                              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                  Constant
                              </div>
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                  Dedicated Care, Always by Your Side
                              </h2>
                              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                  No more wondering who will be there when you need them most. With a dedicated live-in carer,
                                  you have consistent, round-the-clock support, ready to assist with daily tasks or simply offer companionship.
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
                              src="/images/service2.jpg"
                          />
                      </div>
                      <div className="flex flex-col justify-center space-y-4 sm:w-[55%]">
                          <div className="space-y-2">
                              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                  Familiar
                              </div>
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Age In Grace, In Your Own Space</h2>
                              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                  Stay in the comfort and familiarity of your own home as you age. Live-in care allows you to maintain
                                  your routines and independence, with personalized support to ensure your safety and well-being.
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
                              src="/images/service2.jpg"
                              width="550"
                          />
                      </div>
                      <div className="flex flex-col justify-center space-y-4 animate-slideInLeft">
                          <div className="space-y-2">
                              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                  Connection
                              </div>
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                  Beyond Assistance, Building Bonds
                              </h2>
                              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                  Live-in care goes beyond physical assistance. Your dedicated carer becomes a companion, confidante,
                                  and friend, providing emotional support and enriching your life with conversation and shared activities.
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
      </div>
  )
}
