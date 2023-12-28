import { popularNews } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const TopNewSlider = () => {
    const PopularNews = popularNews.slice(0,3);
    return ( 
        <aside className=" h-full w-full flex flex-col gap-2">
            <h2 className=" text-xl underline text-sky-400 font-bold ">Popular News </h2>
            <div className=" flex flex-col gap-3">
                {PopularNews.map((news) => {
                    return<div key={news.name} className=" bg-white dark:bg-gray-900 p-2 w-80 py-2 px-3 flex flex-col gap-2 rounded-md shadow-lg group">
                        <div className=" flex flex-col gap-3 ">
                            <span className=" text-end items-end text-gray-500 text-sm ">{news.date}</span>
                            <h3 className=" text-lg group-hover:text-sky-400 duration-300 text-gray-500 font-semibold">{news.title}</h3>
                        </div>
                        <Link href={`/news/002`} className=" flex flex-col gap-2">
                            <Image
                             src={news.image}
                             alt={news.name}
                             height={150}
                             width={200}
                             className=" rounded-md object-cover"
                            />
                            <p className=" text-gray-500 group-hover:dark:text-white duration-300">{news.description}</p>
                        </Link>
                        <div className=" flex justify-between ">
                            <Link href={"/profile/234"}>
                                <Image
                                src={news.logo}
                                alt={news.name}
                                height={32}
                                width={32}
                                className=" object-cover rounded-full "
                                />
                            </Link>
                            <span className=" text-sky-400 font-semibold text-lg">{news.name}</span>
                        </div>
                    </div>
                })}
            </div>
        </aside>
     );
}
 
export default TopNewSlider;