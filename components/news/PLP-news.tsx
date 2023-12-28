import { popularNews } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const PLPNews = () => {
    return ( 
        <div className=" grid grid-cols-4 w-full h-full gap-4  max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
           {popularNews.map((news) => {
            return <div key={news.title} className=" h-96 overflow-hidden py-5 px-4 bg-white rounded-md shadow-lg  dark:bg-gray-900 flex flex-col gap-3 relative w-72 max-sm:w-72">
                <div>
                    <span className=" text-gray-500 text-sm font-extralight ">{news.date}</span>
                    <h3 className=" text-xl font-semibold  text-sky-500">{news.title}</h3>
                </div>
                <Link href={"/"} className="">
                    <Image
                     src={news.image}
                     alt={news.name}
                     height={250}
                     width={250}
                     className=" object-cover  h-32 w-full"
                    />
                    <p className=" text-gray-600 text-base ">{news.description}</p>
                </Link>
                <div className=" flex justify-between mt-1">
                    <Link href={"/"}>
                        <Image
                        src={news.logo}
                        alt={news.name}
                        height={32}
                        width={32}
                        className=" rounded-full "
                        />
                    </Link>
                    <span className=" text-sky-500 text-xl font-bold">{news.name}</span>
                </div>
            </div>
           })}
        </div>
     );
}
 
export default PLPNews;