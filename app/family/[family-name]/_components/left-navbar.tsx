import Image from "next/image";
import Link from "next/link";

const LeftNavbar = () => {
    return ( 
        <aside className=" h-screen dark:bg-gray-900 bg-white hidden flex-col w-80 xl:flex px-2">
            <div>
                <h3 className=" text-2xl text-sky-500 font-bold  group-name text-center"> Family parent</h3>
                <div className=" flex flex-col gap-2">
                    <Link href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-2 items-center justify-between">
                        <div className=" flex gap-2 items-center">
                            <Image 
                            src={"/bruno.jpg"}
                            width={52}
                            height={52}
                            alt={"profile picture"}
                            className="rounded-full"
                            />
                            <div className=" flex flex-col ">
                                <span className=" text-lg font-medium">Bruno Rwanda</span>
                                <span className=" text-sm text-gray-500">bruno_rwanda</span>
                            </div>
                        </div>
                        <div>
                            <span className=" text-base font-bold text-green-500 ">Pere</span>
                        </div>
                    </Link>
                    <Link href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-2 items-center justify-between">
                        <div className=" flex gap-2 items-center">
                            <Image 
                            src={"/bruno.jpg"}
                            width={52}
                            height={52}
                            alt={"profile picture"}
                            className="rounded-full"
                            />
                            <div className=" flex flex-col ">
                                <span className=" text-lg font-medium">Bruno Rwanda</span>
                                <span className=" text-sm text-gray-500">bruno_rwanda</span>
                            </div>
                        </div>
                        <div>
                            <span className=" text-base font-bold text-green-500 ">Pere</span>
                        </div>
                    </Link>
                    <Link href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-2 items-center justify-between">
                        <div className=" flex gap-2 items-center">
                            <Image 
                            src={"/bruno.jpg"}
                            width={52}
                            height={52}
                            alt={"profile picture"}
                            className="rounded-full"
                            />
                            <div className=" flex flex-col ">
                                <span className=" text-lg font-medium">Bruno Rwanda</span>
                                <span className=" text-sm text-gray-500">bruno_rwanda</span>
                            </div>
                        </div>
                        <div>
                            <span className=" text-base font-bold text-green-500 ">Pere</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className=" flex flex-col gap-2">
                <div className=" flex w-full justify-between">
                    <h3 className=" text-2xl text-gray-500 font-bold  group-name text-start">New children</h3>
                    <span className=" text-gray-500  text-sm underline hover:text-sky-500 cursor-pointer">show more</span>
                </div>
                <div className=" flex flex-col gap-2">
                    <Link href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-2 items-center">
                        <Image 
                        src={"/bruno.jpg"}
                        width={52}
                        height={52}
                        alt={"profile picture"}
                        className="rounded-full"
                        />
                        <div className=" flex flex-col ">
                            <span className=" text-lg font-medium">Bruno Rwanda</span>
                            <span className=" text-sm text-gray-500">bruno_rwanda</span>
                        </div>
                    </Link>
                    <Link href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-2 items-center">
                        <Image 
                        src={"/bruno.jpg"}
                        width={52}
                        height={52}
                        alt={"profile picture"}
                        className="rounded-full"
                        />
                        <div className=" flex flex-col ">
                            <span className=" text-lg font-medium">Bruno Rwanda</span>
                            <span className=" text-sm text-gray-500">bruno_rwanda</span>
                        </div>
                    </Link>
                    <Link href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-2 items-center">
                        <Image 
                        src={"/bruno.jpg"}
                        width={52}
                        height={52}
                        alt={"profile picture"}
                        className="rounded-full"
                        />
                        <div className=" flex flex-col ">
                            <span className=" text-lg font-medium">Bruno Rwanda</span>
                            <span className=" text-sm text-gray-500">bruno_rwanda</span>
                        </div>
                    </Link>
                    <Link href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-2 items-center">
                        <Image 
                        src={"/bruno.jpg"}
                        width={52}
                        height={52}
                        alt={"profile picture"}
                        className="rounded-full"
                        />
                        <div className=" flex flex-col ">
                            <span className=" text-lg font-medium">Bruno Rwanda</span>
                            <span className=" text-sm text-gray-500">bruno_rwanda</span>
                        </div>
                    </Link>
                    <Link href={"/family/AERG/profile/bruno_rwanda"} className=" flex gap-2 items-center">
                        <Image 
                        src={"/bruno.jpg"}
                        width={52}
                        height={52}
                        alt={"profile picture"}
                        className="rounded-full"
                        />
                        <div className=" flex flex-col ">
                            <span className=" text-lg font-medium">Bruno Rwanda</span>
                            <span className=" text-sm text-gray-500">bruno_rwanda</span>
                        </div>
                    </Link>
                </div>
            </div>
        </aside>
     );
}
 
export default LeftNavbar;