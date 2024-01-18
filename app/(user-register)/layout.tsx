import { ReactNode } from "react";
import RegisterFooterUser from "@/components/footer/register-user";
import { ModeToggle } from "@/components/mode-toggle";
import UserRegister from "@/components/register/user-register";

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
            <section className=" h-screen flex w-full justify-between">
                {children}
            </section>
            <div className=" mt-4">
                <RegisterFooterUser/>
            </div>
        </main>
     );
}
 
export default RegisterUserLayout;