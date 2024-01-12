import { Button } from "@/components/ui/button";
import { family } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";

interface FamilyProps {
    _id : string;
    username:string;
    name: string;
    bio: string;
}

const getFamilies = async () => {
    try {
        const family = await fetch("http://localhost:3000/api/family", {
            cache : "no-store"
        });
        if (!family.ok) {
            throw new Error ("Fail to fetch families 😡😡😡");
        }
    } catch (error) {
        console.log("Error to fetch data", error);
    }
}

const FamiliesPage = async () => {
    const Families= await getFamilies();
    return ( 
        <section className=" w-full  md:h-screen h-full justify-center items-center gap-4 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2 px-2">
            {family.map((families) => {
                return <div key={families.username} className=" bg-white p-3 rounded-md shadow-md dark:bg-gray-900 flex flex-col justify-center items-center h-64 w-60 max-sm:w-56 border border-e border-sky-500 dark:">
                    <Image
                     src={families.image}
                     alt={families.name}
                     height={100}
                     width={100}
                     className=" rounded-full"
                    />
                    <h2 className=" text-2xl font-semibold text-sky-400 ">{families.username}</h2>
                    <span>{families.name}</span>
                    <span className=" text-sm text-gray-400 font-thin">Members {families.members}</span>
                    <Link href={families.link} className=" btn  bg-sky-400 text-white border-none hover:bg-sky-700 duration-300">
                        Go To {families.name}
                    </Link>
                </div>
            })}
            <div className="bg-white p-4 rounded-md shadow-md dark:bg-gray-900 flex flex-col justify-center items-center h-64 w-60 group max-sm:w-56 border border-sky-500">
                <Link href={"/family/create-family"} className=" h-40  w-40 border-2 border-gray-500 rounded-full flex flex-col justify-center items-center group">
                    <BsPlus className=" text-5xl text-gray-500 duration-300 group-hover:text-sky-400   group-hover:scale-110"/>
                </Link>
                <span className=" text-gray-500 font-semibold text-lg group-hover:text-sky-400  duration-300">Create new Family</span>
            </div>
        </section>
     );
}

export default FamiliesPage;

