import NextImage from "next/image";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import Link from "next/link";
import {Label} from "@/components/ui/label"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Metadata} from "next";
import {ContactForm} from "@/components/ContactFroms";

export const metadata: Metadata = {
  title: 'Free Consultation - Nelion Care - Bringing the best Home Care to your home',
  description: 'We are a family run Homecare Service provider dedicated to delivery of expert and compassionate person centred care in the comfort of you own home in Derbyshire, Nottinghamshire, Staffordshire and neigbouring counties.',
}
export default function FreeConsultation() {
  return (
    <div>
      <div className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover">
        <div className="w-full h-full bg-gray-700/70 flex flex-col justify-center items-center">
          <Label className="text-4xl font-bold text-center text-white ">Free consultation</Label>
          <p className="text-sm mt-2 text-center text-white">Home &gt; Free consultation</p>
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
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[#FEF3C7] dark:bg-[#4B5563] rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
            </div>
            <Card className="bg-[#FEF3C7] dark:bg-[#4B5563]">
              <CardHeader>
                <CardTitle>Step 1</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-y py-4">
                <p className="text-sm/relaxed">
                  Fill in your name, email address, and phone number clearly in the designated fields. Briefly describe your reason for seeking care in the &quot;Message&quot; box. This helps us tailor the consultation to your specific needs.
                </p>
              </CardContent>
            </Card>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[#D1FAE5] dark:bg-[#4B5563] rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
            </div>
            <Card className="bg-[#D1FAE5] dark:bg-[#4B5563]">
              <CardHeader>
                <CardTitle>Step 2</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-y py-4">
                <p className="text-sm/relaxed">
                  Leave a note in the &quot;Message&quot; box with your preferred date and time range, and we&apos;ll strive to accommodate you.
                </p>
              </CardContent>
            </Card>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[#BFDBFE] dark:bg-[#4B5563] rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
            </div>
            <Card className="bg-[#BFDBFE] dark:bg-[#4B5563]">
              <CardHeader>
                <CardTitle>Step 3</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 border-y py-4">
                <p className="text-sm/relaxed">
                  Click the &quot;Submit&quot; button to send your request.
                  You&apos;ll receive a confirmation email shortly with details of your scheduled consultation.
                </p>
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
              <Link href="mailto:care@nelioncare.co.uk" className="-mt-4 text-lg">care@nelioncare.co.uk</Link>
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
        <ContactForm subject="Free Consultation Form" title="Schedule a call from us" hasSubTitle={false}/>
      </div>
    </div>
  )
}
