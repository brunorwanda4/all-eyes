import Image from "next/image";
import FamilyRegisterForm from "./_components/Family-register-form";

const FamilyRegisterPage = () => {
    const familyName = "Software 💻💻"
    return ( 
        <div className=" pt-16  h-full items-center flex justify-center w-full flex-col max-md:px-4 ">
            <div className=" flex flex-col items-center ">
                <Image src={"/bruno.jpg"} alt="family name"  height={52}  width={52} className=" object-cover rounded-full"/>
                <h3 className=" text-2xl text-sky-500 font-medium  group-name">Family Name</h3>
            </div>
            {/* family register page */}
            <div>
                <FamilyRegisterForm familyName = {familyName}/>
            </div>
        </div>
     );
}
 
export default FamilyRegisterPage;