"use client"

import React, {useState} from "react";
import {
    Button,
    Dropdown, DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Accordion, AccordionItem
} from "@nextui-org/react";
import Link from "next/link";
import {ChevronDown, Logo, SingleLogo} from "./Svgs.jsx";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import { RiServiceFill } from "react-icons/ri";

const mainMenus = [
    {name:"Home",link:"/"},
    {name:"Our Services",link:"/"},
    {name:"About Us",link:"/about-us"},
    {name:"Join Our Team",link:"/join-us"},
    {name:"Contact Us",link:"/contact-us"},
]
const subMenus = [
    {name:"Visiting Care", link:"/our-services/visiting-care",description:"Tailored home care for everything from morning prep to meals & companionship."},
    {name:"Live in Care", link:"/our-services/live-in-care",description:"Live-in care offers peace of mind with 24/7 support, companionship, and a helping hand in your own home."},
    {name:"Emergency Care", link:"/our-services/emergency-care",description:"Dedicated care just a call away, 24/7."},
]

export default function NavbarComp() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16}/>,
        logo: <SingleLogo height={16}/>,
        care: <RiServiceFill size={16} className={"fill-primary-cyan"}/>
    };
    const pathname = usePathname()
    return (
        <Navbar shouldHideOnScroll maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <Link href="/" className="flex flex-row items-center">
                    <Logo height={50} width={100}/>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden md:flex gap-4 pr-12" justify="end">
                {mainMenus.map((menu,index)=>{
                    if(menu.name === "Our Services"){
                        return(
                            <Dropdown key={index}>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className={cn("text-base p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold hover:text-primary-cyan transition-all duration-1000 ease-in-out", pathname === menu.link && "text-primary-cyan font-bold")}
                                        endContent={icons.chevron}
                                        radius="lg"
                                        variant="light"
                                    >
                                        <NavbarItem isActive>
                                            {menu.name}
                                        </NavbarItem>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label={menu.name}
                                    className="w-[340px]"
                                    itemClasses={{
                                        base: "gap-4",
                                    }}
                                >
                                    {subMenus.map((data,index)=>{
                                        return(
                                                <DropdownItem
                                                    key={index}
                                                    description={data.description}
                                                    startContent={icons.care}
                                                >
                                                    <Link href={data.link} className="font-semibold">
                                                        {data.name}
                                                    </Link>
                                                </DropdownItem>
                                        )
                                    })}
                                </DropdownMenu>
                            </Dropdown>
                        )
                    }
                    return(
                        <Link key={index} href={menu.link}
                              className={cn("text-base font-semibold hover:text-primary-cyan transition-all duration-1000 ease-in-out", pathname === menu.link && "text-primary-cyan font-bold")}>
                            <NavbarItem isActive>
                                {menu.name}
                            </NavbarItem>
                        </Link>
                    )
                })}
            </NavbarContent>
            <NavbarContent className="md:hidden flex gap-4" justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
            </NavbarContent>
            <NavbarMenu>
                {mainMenus.map((menu,index)=>{
                    if(menu.name === "Our Services"){
                        return(
                            <NavbarMenuItem isActive key={index}>
                                <Accordion
                                    className="p-0"
                                    itemClasses={{
                                        content: "px-4 pb-0 divide-y-1 divide-slate-400 flex flex-col",
                                        trigger: "px-0 py-0 flex items-center"
                                    }}
                                    motionProps={{
                                        variants: {
                                            enter: {
                                                y: 0,
                                                opacity: 1,
                                                height: "auto",
                                                transition: {
                                                    height: {
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 30,
                                                        duration: 1,
                                                    },
                                                    opacity: {
                                                        easings: "ease",
                                                        duration: 1,
                                                    },
                                                },
                                            },
                                            exit: {
                                                y: -10,
                                                opacity: 0,
                                                height: 0,
                                                transition: {
                                                    height: {
                                                        easings: "ease",
                                                        duration: 0.25,
                                                    },
                                                    opacity: {
                                                        easings: "ease",
                                                        duration: 0.3,
                                                    },
                                                },
                                            },
                                        },
                                    }}
                                >
                                    <AccordionItem key="1" aria-label="Our Services"
                                                   title={<span className={cn("py-0 text-base font-semibold hover:text-primary-cyan transition-all duration-1000 ease-in-out", pathname === "/" && "text-primary-cyan font-bold")}>Our Services</span>}>
                                        {subMenus.map((data,index)=>{
                                            return(
                                                <Link key={index} href="/" className={cn("pb-1 w-full text-base font-semibold hover:text-primary-cyan transition-all duration-1000 ease-in-out", pathname === "/" && "text-primary-cyan font-bold")}>
                                                    {data.name}
                                                </Link>
                                            )
                                        })}
                                    </AccordionItem>
                                </Accordion>
                            </NavbarMenuItem>
                        )
                    }
                    return(
                        <Link key={index} href={menu.link}
                              className={cn("text-base font-semibold hover:text-primary-cyan transition-all duration-1000 ease-in-out", pathname === menu.link && "text-primary-cyan font-bold")}>
                            <NavbarItem isActive>
                                {menu.name}
                            </NavbarItem>
                        </Link>
                    )
                })}
            </NavbarMenu>
        </Navbar>
    );
}
