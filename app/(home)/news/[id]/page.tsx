import TopNewSlider from "@/components/card/top-news-slider";
import { popularNews } from "@/constants";
import Link from "next/link"
import Image from "next/image";
import UserCommentsCard from "@/components/card/user-comments-card";
import { BsChatLeftText, BsNewspaper } from "react-icons/bs";

const NewsUserPage = () => {
    return ( 
        <section className=" px-2  flex gap-2 justify-between pt-20">
            <div>
                <div className="  w-full flex justify-between  gap-2">
                   <div className=" flex flex-col gap-2">
                        <h3 className=" text-2xl font-semibold text-sky-400">Bruno rwanda first news he post</h3>
                        <span className=" text-end flex text-gray-500 items-end">2 day ago</span>
                   </div>
                   <Link
                     href={`/profile/BrunoRwanda`}
                     className=" flex gap-2 group"
                     >
                        <Image
                        src={"/bruno.jpg"}
                        alt="Bruno rwanda"
                        height={80}
                        width={80}
                        className=" rounded-full "
                        />
                        <div className=" flex flex-col gap-2">
                            <span className=" text-sm text-gray-500 group-hover:text-sky-500 duration-300">Bruno Rwanda</span>
                            <span className=" text-sm text-gray-500 group-hover:text-sky-400 duration-300 max-md:hidden">bruno_rwanda</span>
                            <div className=" flex gap-1 ">
                                <BsNewspaper className=" text-lg text-gray-500 group-hover:text-sky-500"/>
                                <span className="group-hover:text-sky-500 duration-300 text-sm text-gray-500">5</span>
                                <span className="group-hover:text-sky-500 duration-300 text-sm text-gray-500">Post</span>
                            </div>
                        </div>
                   </Link>
                </div>
                <div className=" flex fade-in-15 gap-2 mt-2 max-lg:flex-col">
                    <Image
                    src={"/bruno.jpg"}
                    alt="bruno image"
                    height={350}
                    width={350}
                    className=" object-cover  rounded-md"
                    />
                    <p className="text-gray-500 ">
                        Bruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he post
                    </p>
                </div>
                <div className=" grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 mt-3">
                    <Image
                     src={"/bruno.jpg"}
                     alt="bruno image"
                     height={400}
                     width={400}
                     className=" object-cover rounded-md"
                    />
                    <Image
                     src={"/bruno.jpg"}
                     alt="bruno image"
                     height={400}
                     width={400}
                     className=" object-cover rounded-md"
                    />
                    <Image
                     src={"/bruno.jpg"}
                     alt="bruno image"
                     height={400}
                     width={400}
                     className=" object-cover rounded-md"
                    />
                    <Image
                     src={"/bruno.jpg"}
                     alt="bruno image"
                     height={400}
                     width={400}
                     className=" object-cover rounded-md"
                    />
                </div>
                {/* comments form*/}
                <div className=" mt-4">
                    <div className=" flex gap-2">
                        <BsChatLeftText className=" text-2xl"/>
                        <h3 className=" text-xl font-semibold text-gray-500">Comments </h3>
                        <span>5</span>
                    </div>
                    <UserCommentsCard/>
                </div>
            </div>
            <div className=" w-1 h-screen relative bg-gray-500 pt-20 max-lg:hidden"/>
            <div className=" hidden lg:flex">
                <TopNewSlider/>
            </div>
        </section>
     );
}
 
export default NewsUserPage;