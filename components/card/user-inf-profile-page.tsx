import Image from "next/image";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Link from "next/link";
import { BsCamera, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

const UserInfProfilePage = () => {
    return ( 
        <div className=" flex  gap-4  border-b border-gray-500 pb-4 px-2">
           <div >
                <Image
                    src={"/bruno.jpg"}
                    alt="Profile image"
                    width={150}
                    height={150}
                    className="rounded-full object-cover"
                />
           </div>
            <div className=" flex flex-col gap-2 mt-2">
                <div className=" flex gap-4">
                    <span className=" text-lg ">Bruno_rwanda <h2 className=" text-sky-400 flex md:hidden">Bruno Rwanda</h2></span>
                    <h2 className=" text-sky-400 hidden md:flex">Bruno Rwanda</h2>
                    {/* if is my profile */}
                    <div>
                        <Button size="sm" className=" btn-sm btn  hover:bg-sky-400 duration-300 ">
                            Edit profile
                        </Button>
                    </div>
                </div>
                 <div className=" flex gap-2">
                    <Button className=" btn ">
                        Posts <span>0</span>
                    </Button>
                    <Button className=" btn">
                        Families <span>0</span>
                    </Button>
                 </div>
                    <div className="flex gap-2 flex-col">
                        <Link href={"https://www.instagram.com/bruno_rwanda/?hl=en"} target="_blank" rel="noopener noreferrer" className=" flex gap-2">
                            <BsInstagram className=" text-xl "/>
                            <span>https://www.instagram.com/bruno_rwanda/?hl=en</span>
                        </Link>
                        <Link href={"https://www.instagram.com/bruno_rwanda/?hl=en"} target="_blank" rel="noopener noreferrer" className=" flex gap-2">
                            <BsFacebook className=" text-xl "/>
                            <span>https://www.instagram.com/bruno_rwanda/?hl=en</span>
                        </Link>
                        <Link href={"https://www.instagram.com/bruno_rwanda/?hl=en"} target="_blank" rel="noopener noreferrer" className=" flex gap-2">
                            <BsTwitterX className=" text-xl "/>
                            <span>https://www.instagram.com/bruno_rwanda/?hl=en</span>
                        </Link>
                    </div>
                </div>
        </div>
     );
}
 
export default UserInfProfilePage;