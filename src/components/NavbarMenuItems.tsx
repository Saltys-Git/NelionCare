'use client'

import {NavbarContent, NavbarItem} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

export default function NavbarMenuItems(){
    const pathname = usePathname()

    return(
        <NavbarContent className="flex gap-4" justify="center">
            <NavbarItem isActive>
                <Link href="/" className={cn("font-semibold hover:text-green-700 hover:font-bold transition-all duration-1000 ease-in-out", pathname === "/" && "text-green-700 font-bold")}>
                    <span>Home</span>
                </Link>
            </NavbarItem>
            <NavbarItem isActive>

                <Link href="/shop" className={cn("font-semibold hover:text-green-700 hover:font-bold transition-all duration-1000 ease-in-out", pathname === "/shop" && "text-green-700 font-bold")}>
                    <span>Shop</span>
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/about-us" className={cn("font-semibold hover:text-green-700 hover:font-bold transition-all duration-1000 ease-in-out", pathname === "/about-us" && "text-green-700 font-bold")}>
                    <span>About Us</span>
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/contact-us" className={cn("font-semibold hover:text-green-700 hover:font-bold transition-all duration-1000 ease-in-out", pathname === "/contact-us" && "text-green-700 font-bold")}>
                    <span>Contact Us</span>
                </Link>
            </NavbarItem>
        </NavbarContent>
    )
}