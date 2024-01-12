"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsHouse, BsHouseFill, BsMessenger, BsSearch } from "react-icons/bs";
import { HiHome} from "react-icons/hi"
import { LuPlusSquare } from "react-icons/lu";

const MobileFooter = () => {
    const pathname = usePathname()
    return ( 
        <footer className=" flex md:hidden flex-col  w-full z-50 bg-white dark:bg-gray-900 h-12 px-2 py-1">
            <ul className=" w-full items-center h-full flex justify-between">
                <li>
                    <Link href={"/family/AERG"} className="">
                        { pathname === "/family/AERG" ? <BsHouseFill className=" text-3xl text-sky-500 "/> : <BsHouse className=" text-3xl cursor-pointer hover:text-sky-400 duration-300"/>}
                    </Link>
                </li>
                <li>
                    <Link href={"/family/AERG/search"}>
                        { pathname === "/family/AERG/search" ? <BsSearch className=" text-3xl text-sky-500 "/> : <BsSearch className=" text-3xl cursor-pointer hover:text-sky-400 duration-300"/>}
                    </Link>
                </li>
                <li>
                    <Link href={"/family/AERG/messages"}>
                        { pathname === "/family/AERG/messages" ? <BsMessenger className=" text-3xl text-sky-500 "/> : <BsMessenger className=" text-3xl cursor-pointer hover:text-sky-400 duration-300"/>}
                    </Link>
                </li>
                <li>
                    <Link href={"/family/AERG/create"}>
                        { pathname === "/family/AERG/create" ? <LuPlusSquare className=" text-3xl text-sky-500 "/> : <LuPlusSquare className=" text-3xl cursor-pointer hover:text-sky-400 duration-300"/>}
                    </Link>
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
                    </Link>
                </li>
            </ul>
        </footer>
     );
}
 
export default MobileFooter;