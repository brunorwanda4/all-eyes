import Link from "next/link";
import { Button } from "../ui/button";

const UserCreateAccount = () => {
    return ( 
        <form 
            className=" flex gap-8 flex-col"
         >
            <input 
             type="text" 
             placeholder="Full Name"
             className=" bg-transparent outline-none text-sky-950 text-lg dark:text-white border-b-2 border-sky-400 w-96 px-2"
             autoFocus
            />
            <input 
             type="email" 
             placeholder="your email"
             className=" bg-transparent outline-none text-sky-950 text-lg dark:text-white border-b-2 border-sky-400 w-96 px-2"
             autoFocus
            />
            <input 
             type="password" 
             placeholder="your password"
             className=" bg-transparent outline-none text-sky-950 text-lg dark:text-white border-b-2 border-sky-400 w-96 px-2"
             id="password"
            />
            <Button className=" btn  bg-sky-400 border-none shadow-md ">
                Create Account
            </Button>
            <Link href={"/login"} className=" text-gray-500 group">
                if you have Account you can <span className=" text-sky-400 group-hover:text-white duration-300"> Login</span>
            </Link>
        </form>
     );
}
 
export default UserCreateAccount;