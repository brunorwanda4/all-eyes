import { popularNews } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const PLPNews = () => {
    return ( 
        <>
        <h2 className=" text-2xl font-bold text-sky-500">Popular news</h2>
            <div className=" grid grid-cols-4 w-full h-full gap-2 gap-x-2 max-md:grid-cols-2 max-sm:grid-cols-1 mt-2 max-lg:grid-cols-2">
            {popularNews.map((news) => {
                return <div key={news.title} className=" overflow-hidden py-5 px-4 bg-white rounded-md shadow-lg hover:shadow-sky-200 dark:hover:shadow-sky-950 duration-300  dark:bg-gray-900 flex flex-col gap-3 relative w-[19rem] max-sm:w-full group max-lg:w-96">
                    <div>
                        <span className=" text-gray-500 text-sm font-extralight ">{news.date}</span>
                        <h3 className=" text-xl font-semibold duration-300 text-gray-500  group-hover:text-sky-500">{news.title}</h3>
                    </div>
                    <Link href={"/"} className="">
                        <Image
                        src={news.image}
                        alt={news.name}
                        height={250}
                        width={250}
                        className=" object-cover  h-32 w-full"
                        />
                        <p className=" text-gray-600 text-base ">{news.description.split("").slice(0,70).join("")}</p>
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
                        <span className=" text-gray-500 text-lg font-semibold">{news.name}</span>
                    </div>
                </div>
            })}
            </div>
        </>
     );
}
 
export default PLPNews;