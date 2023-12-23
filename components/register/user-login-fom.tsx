import Link from "next/link";
import { Button } from "../ui/button";

const UserLoginForm = () => {
    return ( 
        <form
         className=" flex gap-8 flex-col"
         >
            <input 
             type="email" 
             placeholder="your@email.com"
             className=" bg-transparent outline-none text-sky-950 text-lg dark:text-white border-b-2 border-sky-400 w-96 px-2"
             autoFocus
            />
            <input 
             type="password" 
             placeholder="your password"
             className=" bg-transparent outline-none text-sky-950 text-lg dark:text-white border-b-2 border-sky-400 w-96 px-2"
            />
            <Button className=" btn  bg-sky-400 border-none shadow-md ">
                Login
            </Button>
            <Link href={"/create-account"} className=" text-gray-500 group">
                if you don&apos;t have Account you can <span className=" text-sky-400 group-hover:text-white duration-300"> create account</span>
            </Link>
        </form>
     );
}
 
export default UserLoginForm;