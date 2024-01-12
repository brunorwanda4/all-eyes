import { BsCamera, BsImage } from "react-icons/bs";
import { Label } from "../ui/label";
import Image from "next/image";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface Props {
    user : {
        id : string;
        objectId : string;
        userName: string;
        name : string;
        image: string;
        admin: string;
    }
}

const CreateFamilyCard = () => {
    return ( 
        
        <form className=" bg-white dark:bg-gray-900 flex flex-col gap-4 rounded-md p-2 shadow-lg w-[50rem] max-md:w-screen">
            <div className=" flex gap-3 items-center w-full justify-center  group/image">
                <Image
                src={"/bruno.jpg"}
                alt="new family image"
                height={100}
                width={100}
                className=" object-cover rounded-full"
                />
                <div className=" flex flex-col">
                    <p className=" text-gray-500 text-sm">Choose avatar for your family profile</p>
                    <Label htmlFor="image" className=" text-base text-sky-500 ">
                        select image
                    </Label>
                    <Label htmlFor="image" className=" h-8 w-8 items-center justify-center p-1  rounded-full absolute -ml-20 text-3xl cursor-pointer duration-300 group-hover/image:flex hidden group-hover/image:scale-105 bg-sky-500">
                        <BsCamera/>
                    </Label>
                </div>
                <Input accept="jpg" type="file" id="image" className=" hidden"/>
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500  cursor-pointer">
                    Family Name
                </Label>
                <Input type="text" placeholder="family name" className=" focus:ring-sky-500"/>
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500 ">
                   Family  userName
                </Label>
                <Input type="text" placeholder="family Username" className=" focus:ring-sky-500"/>
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500 ">
                    why do want to create family
                </Label>
                <Textarea rows={5} className="  focus:ring-sky-500"/>
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500 ">
                    Choose admins
                </Label>
                <Input type="text" placeholder="choose admins" className="  focus:ring-sky-500"/>
            </div>
            <Button type="submit" className=" bg-sky-400 btn  border-none text-white hover:dark:text-sky-500">
                Create Family
            </Button>
        </form>
     );
}
 
export default CreateFamilyCard;