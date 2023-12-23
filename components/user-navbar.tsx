"use client";

import React from "react"
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { FiLogIn } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { BsPeople } from "react-icons/bs"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, } from "./ui/navigation-menu";
import { IoCreate } from "react-icons/io5";
import Link from "next/link";
import { FaRegMessage } from "react-icons/fa6";
import { Button } from "./ui/button";
import { BsList } from "react-icons/bs";

const UserNavbar = () => {

    return ( 
        <nav className=" flex gap-4 w-full justify-between items-center px-4 py-2 backdrop-blur fixed z-50">
            <div className=" flex gap-2 ">
                <Logo/>
                {/* mobile */}
                <div className=" lg:hidden flex">
                    <Button className=" btn bg-transparent dark:text-white text-black">
                        <BsList/>
                    </Button>
                </div>
            </div>
            {/* navbar menu */}
            <NavigationMenu className="lg:flex hidden">
                <NavigationMenuList className="flex gap-4">
                    <NavigationMenuItem>
                        <Link href={"/"} className={"text-sky-400 flex gap-2 hover:text-sky-400 font-semibold "}>
                            <GoHomeFill className="text-xl"/>
                            News
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/family"} className=" flex gap-2 hover:text-sky-400 font-semibold ">
                            <BsPeople className="text-xl"/>
                            family
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"/contact"} className=" flex gap-2 hover:text-sky-400 font-semibold ">
                            <FaRegMessage className="text-xl"/>
                            contact
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className=" gap-4 items-center lg:flex hidden">
                <ul className=" flex gap-4">
                    <li>
                        <Link href={"/login"} className=" flex gap-2 hover:text-sky-400  group">
                            <FiLogIn className="text-xl group-hover:scale-105 duration-300"/>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href={"/create-account"} className=" flex gap-2 hover:text-sky-400 duration-300 group">
                            <IoCreate className="text-xl group-hover:scale-105 " />
                            Create Account
                        </Link>
                    </li>
                </ul>
                <ModeToggle/>
            </div>
            <div className=" flex lg:hidden">
                <ModeToggle/>
            </div>
        </nav>
     );
}
 
export default UserNavbar;