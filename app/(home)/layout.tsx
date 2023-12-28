
import UserFooter from "@/components/footer/user-footer";
import UserNavbar from "@/components/user-navbar";
const UserLayout= ({
    children,
}: {
    children: React.ReactNode;
}) => {
    
    return (
        <section>
            <div className={``}>
                <UserNavbar/>
            </div>
            {children}
            <UserFooter/>
        </section>
     );
}
 
export default UserLayout;