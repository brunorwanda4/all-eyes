import { ReactNode } from "react";
import RegisterFooterUser from "@/components/footer/register-user";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Link from "next/link";

const RegisterUserLayout = ({
    children
} : {
    children : React.ReactNode
}) => {
    return ( 
        <main>
            <div className=" text-end">
                <ModeToggle/>
            </div>
            <section className=" w-full h-[89vh] flex justify-center items-center flex-col gap-2">
                {children}
            </section>
            <div className=" mt-4">
                <RegisterFooterUser/>
            </div>
        </main>
     );
}
 
export default RegisterUserLayout;