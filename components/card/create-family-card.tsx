import { BsImage } from "react-icons/bs";
import { Label } from "../ui/label";
import Image from "next/image";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Props {
    user : {
        id : string;
        objectId : string;
        userName: string;
        name : string;
        image: string;
    }
}

const CreateFamilyCard = () => {
    return ( 
        
        <form className=" bg-white dark:bg-gray-900 flex flex-col gap-4 rounded-md p-2 shadow-lg w-96">
            <div className=" flex gap-3">
                <Image
                src={"/bruno.jpg"}
                alt="new family image"
                height={60}
                width={60}
                className=" object-cover rounded-full"
                />
                <Label htmlFor=" image" className=" text-sky-400  mt-7">
                    Choose profile image
                </Label>
                {/* <Input type="file" id="image"/> */}
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500 ">
                    Family Name
                </Label>
                <Input type="text" placeholder="family name"/>
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500 ">
                   Family  userName
                </Label>
                <Input type="text" placeholder="family Username"/>
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500 ">
                    why do want to create family
                </Label>
                <Input type="text" className=" h-28"/>
            </div>
            <Button className=" bg-sky-400 btn  border-none text-white">
                Create Family
            </Button>
        </form>
     );
}
 
export default CreateFamilyCard;