import NextImage from "next/image";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import Link from "next/link";
import {Label} from "@/components/ui/label"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {ContactForm} from "@/components/ContactFroms";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Contact Us - Nelion Care - Bringing the best Home Care to your home',
  description: 'We are a family run Homecare Service provider dedicated to delivery of expert and compassionate person centred care in the comfort of you own home in Derbyshire, Nottinghamshire, Staffordshire and neigbouring counties.',
}

export default function Home() {
  return (
    <>
      <div className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover">
        <div className="w-full h-full bg-gray-700/70 flex flex-col justify-center items-center">
          <Label className="text-4xl font-bold text-center text-white ">Contact us</Label>
          <p className="text-sm mt-2 text-center text-white">Please contact us for you person-centered care using the details below</p>
        </div>
      </div>
      <section className="w-full py-12 md:py-16 bg-[#F5F5F5]">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-16 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Where do i start ?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are here to listen to you and help you through the whole process of arranging you care with us. Get started in Three Easy Steps.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#FEF3C7] dark:bg-[#4B5563]">
              <CardHeader>
                <CardTitle className="font-bold">Step 1</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-t-2 border-black py-4 border-dashed">
                <p className="text-base/relaxed font-semibold">Nelion Care will have an initial conversation with you and your loved ones so we can understand your needs.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#D1FAE5] dark:bg-[#4B5563]">
              <CardHeader>
                <CardTitle className="font-bold">Step 2</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-t-2 border-black py-4 border-dashed">
                <p className="text-base/relaxed font-semibold">We want to know you as an individual.  We will meet with you and your loved ones in person to get to know you, your likes, dislikes and hobbies. We want to  assess your home environment to ensure that the professionals working with you are aware of any potential safety hazards. We then develop a detailed care plan that is  focused on your needs, giving you and your loved ones a peace of mind.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#BFDBFE] dark:bg-[#4B5563]">
              <CardHeader>
                <CardTitle className="font-bold">Step 3</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-t-2 border-black py-4 border-dashed">
                <p className="text-base/relaxed font-semibold">Nelion Care matches our care professionals to your loved one based on their personality and needs. We know interests and needs can change. Our Care Manager conducts regular quality assurance visits to review your loved ones’ needs and adapt their care plan if required.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="space-y-3 py-6 items-center justify-center w-full flex flex-col bg-gradient-to-r from-cyan-200 via-purple-200 to-amber-200">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Details
        </h2>
        <p className="mx-auto text-center max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          If you could give us a little information using the form we would be delighted to help.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 py-8 w-full divide-x bg-[#F5F5F5]">
        <div className="flex flex-col justify-center items-center col-span-1">
          <div className="flex flex-col p-6">
            <NextImage src={"/logo.svg"} alt="logo" height={240} width={240} className="my-6"/>
            <Label className="text-2xl font-bold mt-2">Nelion Care Services</Label>
            <Label className="text-base">Bringing the best Home Care to your home</Label>
            <div className="flex flex-col space-y-1 mt-2">
              <Label className="text-lg">1 Union Street, Long Eaton, NG10 1HH</Label>
              <Label className="text-lg">Email:</Label>
              <Link href="mailto:info@nelioncare.co.uk" className="-mt-4 text-lg">info@nelioncare.co.uk</Link>
              <Label className="text-lg">Tel:</Label>
              <Link href="tel:+447810037290" className="-mt-4 text-lg">07810037290</Link>
            </div>
            <div className="flex flex-row space-x-4 py-4">
              <FaFacebookF size={20}/>
              <FaInstagram size={20}/>
              <FaXTwitter size={20}/>
            </div>
          </div>
        </div>
        <ContactForm subject="Contact Us Form" title="Contact Us" hasSubTitle={true} subTitle="We&apos;d love to hear from you!"/>
      </div>
    </>
  )
}
