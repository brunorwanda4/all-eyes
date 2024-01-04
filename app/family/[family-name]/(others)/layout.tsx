"use client"
import FamilyNavbar from "../_components/navbar";

const FamilyLayout = ({
    children
} : {
    children : React.ReactNode  
}) => {
    return (
        <main className=" w-full flex ">
            <FamilyNavbar/>
            <div className=" md:ml-72">
                {children}
            </div>
        </main>
    )
}

export default FamilyLayout