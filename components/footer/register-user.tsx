import Link from "next/link";
import { BsCopy } from "react-icons/bs"

const RegisterFooterUser = () => {
    return ( 
        <footer className=" flex text-center w-full justify-center">
            <div className=" text-gray-500 group">
                <span className="text-sky-400">&copy;</span>copy  right <Link className=" group-hover:text-sky-400  duration-300 font-semibold underline" href={"/"}>Bruno Rwanda</Link>
            </div>
        </footer>
     );
}
 
export default RegisterFooterUser;