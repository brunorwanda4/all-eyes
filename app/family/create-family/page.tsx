import CreateFamilyCard from "@/components/card/create-family-card";
import { IoIosCreate } from "react-icons/io";

const CreateFamily = () => {
    return ( 
        <section className="flex flex-col justify-center items-center p-2">
            <div className=" flex flex-col gap-3 w-full items-center">
                <h2 className=" text-2xl text-sky-400 font-semibold  text-center flex gap-2 items-center">Create Family <IoIosCreate /></h2>
                <p className=" text-gray-500 text-center ">You are going to create family page or class which  from sos <br /> technical high
                 shool  
                </p>
            </div>
            <div className=" mt-3">
                <CreateFamilyCard/>
            </div>
        </section>
     );
}
 
export default CreateFamily;