import MobileFooter from "../_components/mobile-footer";
import FamilyNavbar from "../_components/navbar";
import MobileNavbar from "../_components/navbar/mobile-navbar";

const FamilyLayout = ({
    children
} : {
    children : React.ReactNode  
}) => {
    return (
        <main className=" flex flex-col w-full">
            <div className="">
                <MobileNavbar/>
            </div>
            <div className=" w-full flex md:mt-0 mt-12">
                <FamilyNavbar/>
                <div className=" md:ml-72 w-full">
                    {children}
                </div>
            </div>
            <div className=" w-full flex fixed h-full z-50 items-end ">
                <MobileFooter/>
            </div>
        </main>
    )
}

export default FamilyLayout