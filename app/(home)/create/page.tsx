import CreateNewsCard from "@/components/card/create-news-card";
import { IoIosCreate } from "react-icons/io";

const Create: React.FC = () => {
    return ( 
        <section className=" h-full w-full pt-16 px-2">
            <div className=" flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold text-sky-500  flex gap-2 items-center">Create Post <IoIosCreate className="inline-block text-3xl"/></h2>
                <p className=" text-sm text-gray-500 ">What happen to school or create new post ?</p>
            </div>
            <div className=" mt-2 w-full h-full justify-center flex">
                <CreateNewsCard/>
            </div>
        </section>
     );
}
 
export default Create;