import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <Link href={"/"} className="flex items-center space-x-2 ">
            <Image
             src={"boy.svg"}
             alt="logo"
             width={50}
             height={50}
             className="cursor-pointer"
            />
        </Link>
     );
}
 
export default Logo;