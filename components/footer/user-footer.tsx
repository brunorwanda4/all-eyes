
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import Logo from "../logo";

const UserFooter = () => {
    return ( 
        <footer className=" mt-4 flex gap-4 bg-white dark:bg-gray-900 px-4 py-2  justify-between text-white items-center">
            <div className=" flex flex-col gap-2">
               <Logo/>
            </div>
            <div className=" flex flex-col justify-center">
                <h2 className=" text-sky-400 text-xl font-semibold ">Soil Media</h2>
                <div className=" flex gap-2  text-xl">
                    <Link href={"/"} className=" dark:text-white text-black  hover:text-sky-400 duration-300">
                        <BsInstagram/>
                    </Link>  
                    <Link href={"/"} className=" dark:text-white text-black  hover:text-sky-400 duration-300">
                        <BsTwitterX/>
                    </Link>  
                    <Link href={"/"} className=" dark:text-white text-black  hover:text-sky-400 duration-300">
                        <BsFacebook/>
                    </Link>  
                </div> 
            </div>
            <div>
                <span className=" text-gray-500 "><span className=" text-sky-400">&copy;</span> copy light 2024<Link href={"/"} className=" hover:text-sky-400 duration-300 underline">Bruno Rwanda</Link></span>
            </div>
        </footer>
     );
}
 
export default UserFooter;