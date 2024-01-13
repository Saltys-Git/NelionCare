import {Button} from '@nextui-org/button';
import {Label} from "@/components/ui/label";
import NextImage from "next/image";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import Link from "next/link";
import {Checkbox, Input} from "@nextui-org/react";
import {Textarea} from "@/components/ui/textarea";
export default function Home() {
  return (
    <div>
      <div className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover ">
        <div className="w-full h-full bg-slate-500/50 flex flex-col justify-center items-center">
          <Label className="text-4xl font-bold text-center text-white ">Contact us</Label>
          <Label className="text-sm mt-2 text-center text-white">Home &gt; Contact us</Label>
        </div>
      </div>
      <div className={"grid grid-cols-2 gap-2 my-16 w-full divide-x"}>
        <div className={"flex flex-col justify-center items-center col-span-1"}>
          <div className="flex flex-col p-6">
            <NextImage src={"/logo.svg"} alt="logo" height={120} width={120}/>
            <Label className="text-lg font-bold mt-2">Chhuya Frozen Foods Ltd.</Label>
            <Label className="text-sm">Healthy Touch</Label>
            <div className="flex flex-col space-y-1 mt-2">
              <Label className="text-sm">Corporate Office: House #29, Road # 02, Sector # 07, Uttara, Dhaka-1230.</Label>
              <Label className="text-sm">Email:</Label>
              <Link href="mailto:chhuyafrozenfoods@gmail.com" className="-mt-4">chhuyafrozenfoods@gmail.com</Link>
              <Label className="text-sm">Tel:</Label>
              <Link href="tel:+880248950241" className="-mt-4">+88 02 48950241</Link>
              <Link href="tel:+880248950242" className="-mt-4">+88 02 48950242</Link>
            </div>
            <div className="flex flex-col space-y-1 mt-2">
              <Label className="text-sm">Factory: Dasyu Narayanpur, Kapasia, Gazipur-1730.</Label>
              <Label className="text-sm">Tel:</Label>
              <Link href="tel:+8801313034623" className="-mt-4">+88 01313-034623</Link>
            </div>
            <div className="flex flex-row space-x-4 py-4">
              <FaFacebookF size={20}/>
              <FaInstagram size={20}/>
              <FaXTwitter size={20}/>
            </div>
          </div>
        </div>
        <div className={"flex flex-col space-y-2 items-center justify-center"}>
          <Label className="text-xl font-bold">Send you opinion</Label>
          <Label>Send your opinion to us and we will get back to you as soon as possible.</Label>
          <div className="flex flex-col w-[60%] pt-8 space-y-2">
            <Input variant="bordered" type="text" label="Name"/>
            <Input variant="bordered" type="email" label="Email"/>
            <Textarea placeholder="Type your message here." />
          </div>
          <Button className="w-[60%] text-white" color="success">Submit</Button>
        </div>
      </div>
    </div>
  )
}
