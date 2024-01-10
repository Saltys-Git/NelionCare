import {Button} from '@nextui-org/button';
import HomeSlider from "@/components/HomeSlider";
import NextImage from "next/image";
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {IoFishOutline} from "react-icons/io5";
import {MdOutlineHandshake} from "react-icons/md";
import {BsBox2Heart} from "react-icons/bs";
import {RiSecurePaymentLine} from "react-icons/ri";
import HomepageButtonShop from "@/components/HomepageButtonShop";
import ProductsGrid from "@/components/ProductsGrid";
import DealOfDay from "@/components/DealOfDay";

const images = [
    "/images/slide.png",
    "/images/slide.png",
    "/images/slide.png",
];

const certifications = [
    "/images/haccp.png",
    "/images/gmp.png",
    "/images/iso.png",
    "/images/halal.png",
]

export default function Home() {
    return (
        <div>
            <div className="flex flex-row space-x-2 my-4 px-4">
                <Card className="w-1/3 h-full">
                    <CardBody className="flex flex-col space-y-2">
                        <Label className="text-base font-bold w-full text-center">Categories</Label>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Salt Water Fish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Fresh Water Fish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Preserved Fish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Fish Fillets</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Shellfish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Whole Fish</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Seafood Blends and Mixes</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Specialty Seafood</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Organic and Sustainable
                            Options</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Breaded and Ready-to-Cook</Label></Link>
                        <Separator/>
                        <Link href="/shop" className="flex flex-row items-center space-x-2 hover:text-green-700 hover:stroke-green-700 hover:scale-105 transition-all duration-1000 ease-in-out">
                            <IoFishOutline/> <Label className="cursor-pointer">Global Seafood Selection</Label></Link>
                    </CardBody>
                </Card>
                <Card className="w-full p-0 h-[400px]">
                    <HomeSlider loop>
                        {images.map((src, i) => {
                            return (
                                // 👇 style each individual slide.
                                // relative - needed since we use the fill prop from next/image component
                                // h-64 - arbitrary height
                                // flex[0_0_100%]
                                //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                                //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                                <div className="relative h-[400px] flex-[0_0_100%]" key={i}>
                                    {/* use object-cover + fill since we don't know the height and width of the parent */}
                                    <NextImage src={src} fill className="object-cover" alt="alt" priority={false}/>
                                </div>
                            );
                        })}
                    </HomeSlider>
                </Card>

            </div>
            <div className="flex flex-row space-x-6 p-6 mt-16">
                <Card
                    className="w-full aspect-video bg-green-100 hover:animate-bounce shadow-lg transition-all duration-1000 ease-in-out">
                    <CardBody className="flex flex-col items-center justify-center h-full">
                        <MdOutlineHandshake className="w-14 h-14" color="red"/>
                        <Label className="text-lg font-bold mt-2 pointer-none">Cash on delivery</Label>
                        <Label className="text-sm text-slate-500 px-4 text-center pointer-none">Seal the Deal, Pay with
                            Ease – Cash on Delivery, Where Convenience Meets Confidence!</Label>
                    </CardBody>
                </Card>
                <Card
                    className="w-full aspect-video bg-orange-100 hover:animate-bounce shadow-lg transition-all duration-1000 ease-in-out">
                    <CardBody className="flex flex-col items-center justify-center h-full">
                        <BsBox2Heart className="w-14 h-14" color="red"/>
                        <Label className="text-lg font-bold mt-2 pointer-none">Secure payment</Label>
                        <Label className="text-sm text-slate-500 px-4 text-center pointer-none">Unlock Peace of Mind:
                            Your Transactions, Our Fort Knox – Secure Payments, Seamless Confidence.</Label>

                    </CardBody>
                </Card>
                <Card
                    className="w-full aspect-video bg-purple-100 hover:animate-bounce shadow-lg transition-all duration-1000 ease-in-out">
                    <CardBody className="flex flex-col items-center justify-center h-full">
                        <RiSecurePaymentLine className="w-14 h-14" color="red"/>
                        <Label className="text-lg font-bold mt-2 pointer-none">Delivery on time</Label>
                        <Label className="text-sm text-slate-500 px-4 text-center pointer-none">Prompt Precision, Swift
                            Satisfaction – Delivering On Time, Every Time.</Label>

                    </CardBody>
                </Card>
            </div>
            <div className="mt-24 flex flex-row space-x-6 p-6">
                <div className="w-1/2 flex flex-row justify-center space-x-16">
                    <div className="flex flex-col relative w-full items-center justify-center">
                        <Image
                            isBlurred
                            src={"/images/homepage.jpg"}
                            alt="Chhuya Frozen Foods Ltd"
                            className="object-cover aspect-video h-[500px] mb-16"
                        />
                    </div>
                    <div className="flex flex-col relative w-full items-center justify-center">
                        <Image
                            isBlurred
                            src={"/images/homepage.jpeg"}
                            alt="Chhuya Frozen Foods Ltd"
                            className="object-cover aspect-video h-[500px] mt-16"
                        />
                    </div>
                    {/*<NextImage src={"/images/homepage.jpg"} alt="logo" height={200} width={200}
                               className="object-cover mb-16"/>
                    <NextImage src={"/images/homepage.jpeg"} alt="logo" height={200} width={200}
                               className="object-cover mt-16"/>*/}
                </div>
                <HomepageButtonShop/>
            </div>
            <div className="flex flex-col mb-6 mt-24 items-center">
                <Label className="text-2xl font-semibold">Our Best Seller</Label>
                <Separator className="w-[150px] bg-green-700 h-[2px] my-4"/>
                <div className="grid grid-cols-5 gap-4 p-4">
                    <ProductsGrid variant={"lg"}/>
                </div>
            </div>
            <div className="flex flex-col mb-24 items-center">
                <Label className="text-2xl font-semibold">Deals of The Day</Label>
                <Separator className="w-[150px] bg-green-700 h-[2px] my-4"/>
                <DealOfDay/>
            </div>

            <div className="flex flex-col justify-center items-center my-16">
                <Label className="text-2xl font-semibold">Certifications</Label>
                <Separator className="w-[120px] bg-green-700 h-[2px] my-4"/>
                <div className="flex flex-row space-x-6 p-6 justify-between px-16">
                    {certifications.map((src, i) => {
                        return (
                            <Image
                                key={i}
                                isBlurred
                                width={240}
                                src={src}
                                alt="Certifications"
                            />
                        );
                    })
                    }
                </div>
            </div>
        </div>
    )
}
