import { popularNews } from "@/constants";
import Image from "next/image"
import Link from "next/link";

const UserCommentsCard = () => {
    return ( 
        <div className=" h-96 bg-white dark:bg-gray-900  w-full px-2 py-3 rounded-md shadow-lg overflow-scroll max-h-96 flex-col gap-2 overflow-x-hidden overflow-y-auto">
            {popularNews.map((comments) => {
                return (
                    <div 
                     key={comments.title}
                     className=" dark:bg-gray-800 w-96 h-40 rounded-md shadow-lg mt-2 group\body"
                     >
                        <Link href={"/profile/bruno_rwanda"} className=" flex border-b border-gray-500 w-full items-center px-2 py-1 gap-2">
                            <Image
                             src={comments.image}
                             alt={comments.description}
                             height={52}
                             width={52}
                             className=" rounded-full object-cover h-12 w-12"
                            />
                            <div className=" flex flex-col gap-2">
                                <h3 className=" text-base group-hover/body:text-sky-500 font-medium">
                                    {comments.name}
                                </h3>
                                <span className=" text-sm text-gray-500 group-hover:text-black dark:group-hover:text-black duration-300 ">
                                    {comments.date}
                                </span>
                            </div>
                        </Link>
                        <div>
                            <p className=" text-sm text-gray-500">
                                {comments.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default UserCommentsCard;