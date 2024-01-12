"use client";

import { popularNews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { BsChatLeftText, BsHeart, BsHeartFill, BsTrash2Fill} from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useState } from "react";

const UserNewsProfilePage = () => {

  const [isLiked , setIsLiked] = useState<boolean>(true);


  return (
    <div className="  grid grid-cols-4 max-md:grid-cols-2 gap-2 gap-x-2 max-sm:grid-cols-1 px-2">
      {popularNews.map((news) => {
        return (
          <div key={news.title}>
            <Link
              href={"/news/123"}
              className=" bg-white dark:bg-gray-900 w-72  py-2 px-1 rounded-md shadow-lg hover:shadow-sky-100 dark:hover:shadow-sky-950 duration-300 flex flex-col group max-md:w-80 max-sm:w-full group"
            >
              <div className=" flex w-full justify-between px-1">
                <div className=" flex flex-col">
                  <h3 className=" text-lg text-gray-500 group-hover:text-sky-500 font-semibold">
                    {news.title}
                  </h3>
                  <span className=" text-sm text-gray-700 ">{news.date}</span>
                </div>
                {/* delete or update */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <span className=" text-xl font-bold">...</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className=" hover:text-yellow-500">
                        <IoIosCreate/>
                        <DropdownMenuLabel>
                            Update
                        </DropdownMenuLabel>
                      </DropdownMenuItem>
                      <DropdownMenuItem className=" hover:text-rose-600">
                        <BsTrash2Fill/>
                        <DropdownMenuLabel>
                            Delete
                        </DropdownMenuLabel>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className=" flex flex-col gap-2">
                <div>
                  <Image
                    src={news.image}
                    alt="image which posted"
                    height={250}
                    width={300}
                    className=" rounded-md object-cover w-full h-32"
                  />
                </div>
                <p className=" text-gray-500 text-sm  group-hover:dark:text-white duration-300">
                  {news.description.split("").slice(0,70).join("")}
                </p>
              </div>
              {/* more information  on post*/}
              <div className=" flex gap-2 border-t border-gray-500 mt-2 w-full pt-2 px-2 justify-between">
                {/* likes */}
                  <div className=" flex gap-2 group items-center ">
                    {isLiked ? <BsHeart className=" text-xl text-red-500 group-hover:scale-110 duration-500 "/> : <BsHeartFill className=" text-xl text-red-500 group-hover:scale-110 duration-500 "/>}
                    <div className=" flex gap-1">
                      <span className="">10</span>
                      <span className=" text-gray-500 text-base">Likes</span>
                    </div>
                  </div>
                {/* comments */}
                <div className="flex gap-2 group items-center ">
                  <BsChatLeftText className=" text-lime-500 text-xl group-hover:scale-110 duration-500 "/>
                  <div  className=" flex gap-1">
                    <span className="">2</span>
                    <span className=" text-gray-500 text-base">Comments</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserNewsProfilePage;
