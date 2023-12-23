import UserNavbar from "@/components/user-navbar";
import  {ReactNode}  from "react";
const UserLayout= ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <section>
            <UserNavbar/>
            {children}
        </section>
     );
}
 
export default UserLayout;