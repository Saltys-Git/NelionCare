import {Label} from "@/components/ui/label";
import {Image} from "@nextui-org/react";
import {Separator} from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <div className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover ">
        <div className="w-full h-full bg-slate-500/50 flex flex-col justify-center items-center">
          <Label className="text-4xl font-bold text-center text-white ">About us</Label>
          <Label className="text-sm mt-2 text-center text-white">Home &gt; About us</Label>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 p-8 px-24 gap-8 my-36">
        <div className="col-span-2 flex flex-col relative w-full items-center justify-center">
          <Image
              isZoomed
              src="/images/about1.jpg"
              alt="Chhuya Frozen Foods Ltd"
              className="object-cover aspect-video h-[500px] mb-10"
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <Label className="text-4xl font-bold mb-4">Who We Are?</Label>
          <div className="flex flex-row items-center space-x-2">
            <Separator className="w-[50px] h-[2px] bg-green-700"/>
            <Label className="text-sm">Where Quality Meets Freshness, Bringing Ocean Bounty to Your Table.</Label>
          </div>
          <div className="space-y-4 flex flex-col">
            <Label className="text-sm mt-6 leading-loose">
              CFFL operates 98 own ponds in Gazipur and Bramonbaria for the purpose of fish cultivation. 15 number of Fisheries graduate are working with CFFL, who are responsible for  looking after small fry fish, Pond Management, Identify and monitor areas and issues impacting fish, Research ecosystems to determine impacts caused by global change, pollution, and other causes.
            </Label>
            <Label className="text-sm mt-2 leading-loose">
              CFFL possesses a total land area of 500( Five Hundred) decimal units to support its factory operations located in Dasuya, Narayanpur, Kapasia, Gazipur which maintain all kinds of international standard procedures. Through these facilities, the company efficiently carries out fish farming, processing, and distribution activities to meet market demands and contribute to the local economy.
            </Label>
            <Label className="text-sm mt-2 leading-loose">
              As a startup company, we are driven by a passion to make CFFL a trusted name in the frozen food industry. With our unwavering commitment to quality, sustainability, and customer satisfaction, we are trying to create an appreciate place for ourselves in the market and become a go-to choice for frozen fish products.
            </Label>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 p-8 px-24 gap-8 my-36">
        <div className="col-span-2 flex flex-col">
          <Label className="text-4xl font-bold mb-4">Our Story</Label>
          <div className="flex flex-row items-center space-x-2">
            <Separator className="w-[50px] h-[2px] bg-green-700"/>
            <Label className="text-sm">Where Quality Meets Freshness, Bringing Ocean Bounty to Your Table.</Label>
          </div>
          <div className="space-y-4 flex flex-col">
            <Label className="text-sm mt-6 leading-loose">
              Chhuya Frozen Foods Limited, a sister concern of Chhuya Group is on of the largest conglomerates in Bangladesh, with a turnover of USD $117.65 million equivalent to BDT 10,000 million. Currently Chhuya Group operating 4 entitles such as Chhuya Frozen Foods Ltd, Chhuya Agro Products Ltd, Chhuya Fisheries & Hatcheries Limited & Peerage Properties Ltd.
            </Label>
            <Label className="text-sm mt-2 leading-loose">
              For special contribution to the Fisheries industry , Chhuya Group achieved Gold Medal in 2023 from the Bangladeshi Government..
            </Label>
          </div>
        </div>
        <div className="col-span-2 flex flex-col relative w-full items-center justify-center">
          <Image
              isZoomed
              src="/images/about2.png"
              alt="Chhuya Frozen Foods Ltd"
              className="object-cover aspect-video h-[500px] mb-10"
          />
        </div>
      </div>
      <div className="my-36 h-[350px] w-full flex flex-row items-center justify-between bg-[url('../../public/images/about3.jpg')] bg-fixed bg-center bg-cover ">
        <div className="p-24 w-full h-full bg-slate-500/80 flex flex-col justify-center items-center">
          <Label className="text-4xl font-bold text-center text-white ">Our Mission</Label>
          <Separator className="w-[50px] h-[2px] bg-green-700 mt-2 mb-2"/>
          <Label className="text-sm mt-2 text-center text-white">To provide our customers with high
            quality, ensure availability and best prices fish products.
          </Label>
        </div>
        <div className="p-24 w-full h-full bg-slate-500/80 flex flex-col justify-center items-center">
            <Label className="text-4xl font-bold text-center text-white ">Our Vision</Label>
            <Separator className="w-[50px] h-[2px] bg-green-700 mt-2 mb-2"/>
            <Label className="text-sm mt-2 text-center text-white">To be the Leading House-hold Brand as well as promoting the health benefits of consuming fish.
            </Label>
          </div>
      </div>
    </div>
  )
}
