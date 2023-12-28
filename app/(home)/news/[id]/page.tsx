import TopNewSlider from "@/components/card/top-news-slider";
import { popularNews } from "@/constants";
import Link from "next/link"
import Image from "next/image";

const NewsUserPage = () => {
    return ( 
        <section className=" px-2  flex gap-2 justify-between pt-20">
            <div>
                <div className="  w-full flex justify-between  gap-2">
                   <div className=" flex flex-col gap-2">
                        <h3 className=" text-2xl font-semibold text-sky-400">Bruno rwanda first news he post</h3>
                        <span className=" text-end flex text-gray-500 items-end">2 day ago</span>
                   </div>
                   <Link href={`/profile/BrunoRwanda`}>
                        <Image
                        src={"/bruno.jpg"}
                        alt="Bruno rwanda"
                        height={52}
                        width={52}
                        className=" object-cover rounded-full "
                        />
                        <span className=" text-lg text-sky-400 font-semibold ">Bruno Rwanda</span>
                   </Link>
                </div>
                <div>
                    <Image
                    src={"/bruno.jpg"}
                    alt="bruno image"
                    height={700}
                    width={700}
                    className=" object-cover  rounded-lg "
                    />
                    <p className="text-gray-500 ">
                        Bruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he postBruno rwanda first news he post
                    </p>
                </div>
                <div className=" grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2">
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
            </div>
            <div className=" w-1 h-screen relative bg-gray-500 pt-20 max-lg:hidden"/>
            <div className=" hidden lg:flex">
                <TopNewSlider/>
            </div>
        </section>
     );
}
 
export default NewsUserPage;