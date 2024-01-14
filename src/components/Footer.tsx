import {Separator} from "@/components/ui/separator";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import { FaFacebookF ,FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Logo} from "./Svgs.jsx";
import React from "react";
export default function Footer(){
    return(
        <div className="w-full bg-white">
            <Separator/>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 bg-blue-100 py-5">
                <div className="flex flex-col p-6 items-start mt-8 col-span-1">
                    <Logo height={50}/>
                    {/*<NextImage src={"/images/logo.png"} alt="logo" height={120} width={120}/>*/}
                    <Label className="text-lg font-bold mt-4">Nelion Care Services</Label>
                    <Label className="text-sm">Bringing the best Home Care to your home</Label>
                    <div className="flex flex-row space-x-4 py-4">
                        <FaFacebookF size={20}/>
                        <FaInstagram size={20}/>
                        <FaXTwitter size={20}/>
                    </div>
                </div>
                <div className="flex flex-col p-6 space-y-4 col-span-1">
                    <Label className="text-lg font-bold">Help & Information</Label>
                    <Separator className="w-[50px]"/>
                    <Link href="/about-us" className="hover:text-primary-cyan text-sm font-semibold transition-all ease-in-out duration-500">About Us</Link>
                    <Link href="#" className="hover:text-primary-cyan text-sm font-semibold transition-all ease-in-out duration-500">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary-cyan text-sm font-semibold transition-all ease-in-out duration-500">Terms & Conditions</Link>
                </div>
                <div className="flex flex-col p-6 space-y-4 col-span-1">
                    <Label className="text-lg font-bold invisible hidden sm:block">Help & Information</Label>
                    <Separator className="w-[50px] invisible"/>
                    <Link href="/contact-us" className="hover:text-primary-cyan text-sm font-semibold transition-all ease-in-out duration-500">Contact Us</Link>
                    <Link href="#" className="hover:text-primary-cyan text-sm font-semibold transition-all ease-in-out duration-500">Complain / Advice</Link>
                    <Link href="/free-consulation" className="hover:text-primary-cyan text-sm font-semibold transition-all ease-in-out duration-500">Schedule a Free Consultation</Link>
                </div>
                <div className="flex flex-col p-6 space-y-4 col-span-1">
                    <Label className="text-lg font-bold">Stay Connected</Label>
                    <Separator className="w-[50px]"/>
                    <div className="flex flex-col space-y-1">
                        <Label className="text-base font-semibold">Nelion Care Services</Label>
                        <Label className="text-sm">1 Union Street, Long Eaton, NG10 1HH</Label>
                        <Label className="text-sm">Email:</Label>
                        <Link href="mailto:care@nelioncare.co.uk" className="-mt-4">care@nelioncare.co.uk</Link>
                        <Label className="text-sm">Phone:</Label>
                        <Link href="tel:+447810037290" className="-mt-4">07810 037290</Link>
                    </div>
                </div>
            </div>
            <Separator/>
            <div className="flex flex-row justify-center items-center w-full py-4">
                <Label className="text-sm">© Copyright 2024 | <span><Link href="/" className="font-bold">Nelion Care Services</Link></span> By <a href="https://www.mytechys.co.uk" target="_blank" rel="noreferrer" className="font-bold">Techy&apos;s</a>.</Label>
            </div>
        </div>
    )
}