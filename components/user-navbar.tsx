"use client";

import React from "react"
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { FiLogIn } from "react-icons/fi";
import { IoCreate } from "react-icons/io5";
import Link from "next/link";
import { Button } from "./ui/button";
import { BsList, BsX ,BsPerson} from "react-icons/bs";
import {usePathname, useRouter} from "next/navigation";

import { navbarListUser } from "@/constants/index"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "./ui/drawer";

const UserNavbar = () => {

    const router = useRouter();
    const pathname = usePathname();



    return ( 
        <nav className=" flex gap-4 w-full justify-between items-center px-4 py-2 backdrop-blur fixed z-50">
            <div className=" flex gap-2 ">
                <Logo/>
                {/* mobile */}
                <div className=" lg:hidden flex">
                    <Drawer>
                        <DrawerTrigger>
                            <Button className=" btn bg-transparent dark:text-white text-black">
                                <BsList/>
                            </Button>
                            <DrawerContent>
                                <DrawerTitle>
                                    <div className=" flex justify-between">
                                        <div className=" flex ">
                                            <Logo/>
                                            <span className=" mt-4 text-sky-400 ">Navigation Bar</span>
                                        </div>
                                        <DrawerClose>
                                            <Button className=" text-2xl bg-transparent text-white hover:text-black focus:text-black">
                                                <BsX/>
                                            </Button>
                                        </DrawerClose>
                                    </div>
                                </DrawerTitle>
                                <DrawerDescription>
                                    <ul className="gap-4 flex flex-col  mb-4">
                                        {navbarListUser.map((link) => {
                                            const isActive = pathname === link.url;
                                            return <li
                                            key = {link.title}
                                            >
                                                <Link href={link.url} className={`flex gap-2 hover:text-sky-400 font-semibold duration-300 ${isActive && "text-sky-400"}`}>
                                                    <link.icon className="text-xl"/>
                                                    <span>{link.title}</span>
                                                </Link>
                                            </li>
                                        })}
                                    </ul>
                                </DrawerDescription>
                            </DrawerContent>
                        </DrawerTrigger>
                    </Drawer>
                </div>
            </div>
            {/* navbar menu */}
            <ul className="gap-4 hidden lg:flex">
                {navbarListUser.map((link) => {
                    const isActive = pathname === link.url;
                    return <li
                    key = {link.title}
                    >
                        <Link href={link.url} className={`flex gap-2 hover:text-sky-400 font-semibold duration-300 ${isActive && "text-sky-400"}`}>
                            <link.icon className="text-xl"/>
                            <span>{link.title}</span>
                        </Link>
                    </li>
                })}
            </ul>
            <div className=" gap-4 items-center lg:flex hidden ">
                <div className=" flex gap-4 w-full">
                    <Link href={"/profile/bruno_rwanda"} className=" flex gap-2 hover:text-sky-400 duration-300">
                       <BsPerson className="text-xl"/>
                       Bruno_rwanda
                    </Link>
                    <div>
                        <Link href={"/create-account"} className=" flex gap-2 hover:text-sky-400 duration-300 group">
                            <FiLogIn className="text-xl group-hover:scale-105 " />
                            Logout
                        </Link>
                    </div>
                </div>
                <ModeToggle/>
            </div>
            <div className=" flex lg:hidden">
                <ModeToggle/>
            </div>
        </nav>
     );
}
 
export default UserNavbar;