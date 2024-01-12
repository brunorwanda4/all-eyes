"use client";

import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { BsPeople } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const MobileNavbar = () => {
    const [hidden , setHidden] = useState<boolean>(false)
    useEffect(() => {
        let scrollTop = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const scrollingDown = currentScrollPos > scrollTop;

            setHidden(scrollingDown);
            scrollTop = currentScrollPos;
        }

        window.addEventListener("scroll", handleScroll )
        return () => {
            window.removeEventListener("scroll" , handleScroll);
        };
    } , [])
    return ( 
        <nav className={clsx("flex md:hidden justify-between z-50  w-full fixed h-12 dark:bg-slate-950 shadow-md dark:shadow-sky-950  px-2 py-1  bg-white", hidden ? "hidden" : " flex")}>
            <div className=" w-1/2">
                <Link href={"/family/AERG"} className=" flex w-full ga-2 justify-between px-3 items-center cursor-pointer">
                    <Image 
                     src={"/plp-logo.jpg"} 
                     alt="plp logo" height={42} 
                     width={42} className=" rounded-full cursor-pointer"
                    />
                    <div>
                        <h3 className=" font-bold text-2xl group-name">PLP Family</h3>
                    </div>
                    <div className=" flex text-sm text-gray-500 gap-1 items-center">
                        <BsPeople/>
                        <span className=" text-[13px]">50</span>
                    </div>
                </Link>
            </div>
            {/* other setting */}
            <div className=" flex gap-2 items-center">
                <div>
                    <ModeToggle/>
                </div>
            </div>
        </nav>
     );
}
 
export default MobileNavbar;