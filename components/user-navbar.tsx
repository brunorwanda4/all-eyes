"use client";

import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { BsList, BsX, BsPerson } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { dark } from "@clerk/themes";
// local page

import Logo from "./logo";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { navbarListUser } from "@/constants/index";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import UserSearch from "./navbar/user-search";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";

const UserNavbar = () => {
  // scrolling hidden nav bar
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    let scrollDown = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > scrollDown;

      setScroll(scrollingDown);
      scrollDown = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const { setTheme } = useTheme();

  return (
    <nav
      className={clsx(
        "flex gap-4 w-full justify-between items-center px-4 py-2 backdrop-blur fixed z-50",
        scroll ? " hidden" : "",
      )}
    >
      <div className=" flex gap-2 ">
        <Logo />
        {/* mobile */}
        <div className=" lg:hidden flex">
          <Drawer>
            <DrawerTrigger>
              <Button className=" btn bg-sky-500 border-none text-white dark:bg-gray-900 dark:hover:bg-sky-500 duration-300">
                <BsList />
              </Button>
              <DrawerContent className=" px-2">
                <DrawerTitle>
                  <div className=" flex justify-between">
                    <div className=" flex ">
                      <Logo />
                      <span className=" mt-4 text-sky-400 ">
                        Navigation Bar
                      </span>
                    </div>
                  </div>
                </DrawerTitle>
                <DrawerDescription>
                  <ul className="gap-4 flex flex-col  mb-4 mt-2">
                    {navbarListUser.map((link) => {
                      const isActive = pathname === link.url;
                      return (
                        <li key={link.title}>
                          <Link
                            href={link.url}
                            className={`flex gap-2 text-lg hover:text-sky-400 font-semibold py-2 rounded-md duration-300  text-black ${
                              isActive
                                ? "text-sky-400 bg-sky-100 dark:bg-gray-900"
                                : " dark:text-white "
                            }`}
                          >
                            <link.icon className="text-2xl" />
                            <span>{link.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                    <li>Other setting</li>
                    <li>
                      <Link
                        href={"/profile/bruno_rwanda"}
                        className={clsx(
                          "flex gap-2 font-semibold py-2 rounded-md text-lg",
                          pathname === "/profile/bruno_rwanda"
                            ? "text-sky-400 bg-sky-100 dark:bg-gray-900"
                            : " dark:text-white text-black",
                        )}
                      >
                        <BsPerson className=" text-3xl" />
                        <span className=" ">Profile</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setTheme("light")}
                        className=" gap-2 cursor-pointer  dark:flex hidden group hover:dark:bg-gray-900 duration-300 w-full py-2 rounded-md"
                      >
                        <Moon className=" dark:block hidden text-black dark:text-white group-hover:text-sky-500 duration-300" />
                        <span className=" text-lg font-semibold text-black dark:text-white group-hover:text-sky-500 duration-300">
                          Themes
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setTheme("dark")}
                        className=" flex gap-2 cursor-pointer   dark:hidden group hover:dark:bg-gray-900 duration-300 w-full py-2 rounded-md"
                      >
                        <Sun className=" dark:hidden block text-black dark:text-white group-hover:text-sky-500 duration-300" />
                        <span className=" text-lg font-semibold text-black dark:text-gray-500 group-hover:text-sky-500 duration-300">
                          Themes
                        </span>
                      </button>
                    </li>
                    <li className="text-rose-500 flex gap-2  dark:hover:bg-rose-950 py-2 rounded-md cursor-pointer">
                      <HiArrowLeftOnRectangle className=" text-2xl " />
                      <span className=" text-lg font-semibold">Logout</span>
                    </li>
                  </ul>
                </DrawerDescription>
                <DrawerClose>
                  <Button className=" bg-transparent text-rose-500 text-2xl font-bold hover:bg-rose-300 dark:hover:bg-rose-900  duration-300 bg-rose-100 w-full mb-1 dark:bg-rose-950">
                    <span className=" text-sm ">cancer</span>
                  </Button>
                </DrawerClose>
              </DrawerContent>
            </DrawerTrigger>
          </Drawer>
        </div>
      </div>
      {/* navbar menu */}
      <ul className="gap-4 hidden lg:flex">
        {navbarListUser.map((link) => {
          const isActive = pathname === link.url;
          return (
            <li key={link.title}>
              <Link
                href={link.url}
                className={`flex gap-2 hover:text-sky-400 font-semibold duration-300 ${
                  isActive && "text-sky-400"
                }`}
              >
                <link.icon className="text-xl" />
                <span>{link.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* search */}
      <div className=" block">
        <UserSearch />
      </div>
      <div className=" gap-4 items-center flex ">
        <div className=" flex gap-4 w-full">
          <Link
            href={"/profile/bruno_rwanda"}
            className=" flex gap-2 hover:text-sky-400 duration-300"
          >
            <BsPerson className="text-xl" />
            <span className=" lg:flex hidden">Bruno_rwanda</span>
          </Link>
          <div>
            <SignedIn>
              <SignOutButton>
                  <div className=" btn">
                    <CiLogout />
                  </div>
              </SignOutButton>
            </SignedIn>
          </div>
          <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default UserNavbar;
