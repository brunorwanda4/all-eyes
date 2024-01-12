"use client";

import { ModeToggle } from "@/components/mode-toggle";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsHouse, BsPeople, BsSearch, BsMessenger, BsHouseFill } from "react-icons/bs";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { LuPlusSquare } from "react-icons/lu";
import Search from "./search";
import { FaFacebookMessenger} from "react-icons/fa";
import {IoIosCreate} from "react-icons/io";

const FamilyNavbar = () => {
    const [rightAside, setRightAside] = useState<string | React.ReactNode>();
    const [spanVisibility , setSpanVisibility] = useState<boolean>(true);
    const [searchActive , setSearchActive] = useState<boolean>(false);
    const toggleRightAside = (changeRightAside: string ) => {
        switch (changeRightAside) {
            case "home" :
                setRightAside("")
                setSpanVisibility(true)
                setSearchActive(false)
            break;
            case "search" :
                setRightAside(<Search/>)
                setSpanVisibility(false)
                setSearchActive(true)
            break;
            case "messages" :
                setRightAside("messages")
                setSpanVisibility(false)
                setSearchActive(false)
            break;
            case "create" :
                setRightAside("create")
                setSpanVisibility(true)
                setSearchActive(false)
            break;
            case "profile" :
                setRightAside("profile")
                setSpanVisibility(true)
                setSearchActive(false)
            break;
            default:
                setRightAside("")
                setSpanVisibility(true)
                setSearchActive(true)
            break;    
        }
    }
    const pathname = usePathname()
    return ( 
        <aside className="w-72 shadow-md border-r border-gray-500 bg-gray-50  h-screen py-2 fixed z-50 md:flex md:flex-col dark:bg-gray-900 hidden lg:block">
            <Link href={"/family/AERG"} className=" flex w-full ga-2 justify-between px-3 items-center">
                <Image src={"/plp-logo.jpg"} alt="plp logo" height={52} width={52} className=" rounded-full cursor-pointer"/>
                <div>
                    <h3 className=" font-bold text-2xl group-name">PLP Family</h3>
                </div>
                <div className=" flex text-sm text-gray-500 gap-1 items-center">
                    <BsPeople/>
                    <span className=" text-[13px]">50</span>
                </div>
            </Link>
            <div className=" flex">
                {/* links */}
               <ul className=" px-2 mt-4 flex flex-col gap-2">
                    <li onClick={() => toggleRightAside("home")}>
                        <Link href="/family/AERG">
                            <div className=" flex gap-2 items-center  group">
                                <button type="button" className={clsx("bg-transparent dark:text-white hover:text-sky-500 hover:dark:bg-gray-800 hover:bg-sky-100 h-12 w-12 justify-center flex items-center  rounded-md duration-300  group-hover:text-sky-500 group-hover:dark:bg-gray-800" ,pathname === "/family/AERG" ? " bg-sky-100 dark:bg-gray-800 text-sky-500 dark:text-sky-500 " : "", searchActive ? " bg-white dark:bg-gray-900 dark:text-white" : "")}>
                                    {pathname === "/family/AERG" ? <BsHouseFill className={clsx("text-2xl", spanVisibility ? " " : "" , pathname === "/family/AERG" ? " text-sky-500" : "")}/> : <BsHouse className={clsx("text-2xl", spanVisibility ? " " : "" )}/>}
                                </button>
                                {spanVisibility && (
                                    <span className={clsx( pathname === "/family/AERG" ? " flex font-bold text-lg text-sky-500" : "" )}>Home</span>
                                )}
                            </div>
                        </Link>
                    </li>
                    <li className=" flex gap-2 items-center group" onClick={() => toggleRightAside("search")}>
                        <button type="button" className={clsx("bg-transparent dark:text-white hover:text-sky-500 hover:dark:bg-gray-800 hover:bg-sky-100 h-12 w-12 justify-center flex items-center  rounded-md duration-300  group-hover:text-sky-500 group-hover:bg-sky-100 group-hover:dark:bg-gray-800 ", searchActive ? " bg-sky-100 dark:bg-gray-800 text-sky-500 dark:text-sky-500 " : " text-black dark:text-white")}>
                            <BsSearch className={clsx("text-2xl", spanVisibility ? " " : "text-sky-500" )}/>
                        </button>
                        {
                            spanVisibility && (
                                <span className={clsx( pathname === "/family/AERG" ? " flex text-lg group-hover:text-sky-500 duration-300 cursor-pointer" : "" )}>Search</span>
                            )
                        }
                    </li>
                    <li onClick={() => toggleRightAside("messages")}>
                        <Link href="/family/AERG/messages" className=" flex gap-2 items-center group">
                            <button type="button" className={clsx("bg-transparent hover:text-sky-500 hover:dark:bg-gray-800 h-12 w-12 justify-center flex items-center  rounded-md duration-300  group-hover:text-sky-500 group-hover:dark:bg-gray-800 group-hover:bg-sky-100 " ,pathname === "/family/AERG/messages" ? " bg-sky-100 dark:bg-gray-800 text-sky-500 " : " ")}>
                                {pathname === "/family/AERG/messages" ? <BsMessenger className="text-2xl"/> : <FaFacebookMessenger className="text-2xl"/>}
                            </button>
                            {
                                spanVisibility && (
                                    <span className={clsx( pathname === "/family/AERG" ? " flex text-lg group-hover:text-sky-500 duration-300 cursor-pointer" : " " )}>Messages</span>
                                )
                            }
                        </Link>
                    </li>
                    <li onClick={() => toggleRightAside("")}>
                        <div className=" flex gap-2 items-center group">
                            <button type="button" className=" bg-transparent dark:text-white hover:text-sky-500 hover:dark:bg-gray-800 hover:bg-sky-100 h-12 w-12 justify-center flex items-center  rounded-md duration-300  group-hover:text-sky-500 group-hover:dark:bg-gray-800 group-hover:bg-sky-100">
                                <IoIosCreate className="text-2xl"/>
                            </button>
                            {
                                spanVisibility && (
                                    <span className={clsx( pathname === "/family/AERG" ? " flex text-lg group-hover:text-sky-500 duration-300 cursor-pointer" : "" )}>Create</span>
                                )
                            }
                        </div>
                    </li>
                    <li>
                       <Link  href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-4 items-center group ">
                            <Image
                            src={"/bruno.jpg"}
                            alt="profile image"
                            height={38}
                            width={38}
                            className="rounded-full cursor-pointer"
                            />
                            {
                                spanVisibility && (
                                    <span className={clsx( pathname === "/family/AERG" ? " flex text-lg group-hover:text-sky-500 duration-300 cursor-pointer" : "")}>Profile</span>
                                )
                            }
                       </Link>
                    </li>
                    <li className=" flex flex-col mt-24 gap-2 ">
                        <div className=" flex gap-5 items-center group ml-1">
                            <ModeToggle/>
                            {
                                spanVisibility && (
                                    <span className={clsx( pathname === "/family/AERG" ? " flex text-lg group-hover:text-sky-500 duration-300 cursor-pointer" : "")}>Themes</span>
                                )
                            }
                        </div>
                        <div className=" flex gap-5 items-center group">
                            <button type="button" className=" bg-transparent dark:text-white hover:text-sky-500 hover:bg-gray-800 h-12 w-12 justify-center flex items-center  rounded-md duration-300  group-hover:text-rose-500 group-hover:bg-sky-100 group-hover:dark:bg-gray-800">
                                <HiArrowLeftOnRectangle className="text-2xl"/>
                            </button>
                            {
                                spanVisibility && (
                                    <span className={clsx( pathname === "/family/AERG" ? " flex text-lg group-hover:text-rose-500 duration-300 cursor-pointer" : "")}>Logout</span>
                                )
                            }
                        </div>
                    </li>
               </ul>
                <div className=" mt-4">
                    {rightAside}
                </div>
            </div>
        </aside>
     );
}
 
export default FamilyNavbar;