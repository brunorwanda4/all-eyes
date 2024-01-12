import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { BsImage, BsX } from "react-icons/bs";

const CreateNewsCard: React.FC = () => {
    return ( 
        <form className="w-[720px] bg-white rounded-lg p-4 dark:bg-gray-900 shadow-lg flex flex-col gap-2">
            <div className=" flex flex-col gap-2">
                <Label  htmlFor="title" className=" text-gray-500 text-sm ">
                    Title of post
                </Label>
                <Input
                 autoFocus
                 id="title"
                 type="text"
                 placeholder="Title"
                 className=" focus:border-sky-500"
                />
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500 text-sm " htmlFor="description">
                    Description of post
                </Label>
                <Textarea
                 id="description"
                 rows={7}
                 typeof="text" 
                 className=" focus:border-sky-500"
                />
            </div>
            <div className=" flex flex-col gap-2">
                <Label className=" text-gray-500 text-sm ">
                    Add post image
                </Label>
                <div className="gap-2 grid grid-cols-5 max-md:grid-cols-4">
                    {/* added images */}
                    <div className=" group">
                        <Image
                        src={"/bruno.jpg"}
                        alt="new post image"
                        height={120}
                        width={120}
                        className=" rounded-md cursor-pointer shadow-lg"
                        />
                        <button type="button" className=" text-3xl backdrop-blur absolute z-20 h-8 w-8  place-items-center rounded-full  -mt-32 hover:text-rose-500 ml-24 duration-300 group-hover:flex hidden cursor-pointer">
                            <BsX/>
                        </button>
                    </div>
                    <div className="">
                        <Label className=" cursor-pointer group" htmlFor="image">
                            <div className=" h-[120px] w-[120px] dark:bg-gray-800 shadow-lg bg-sky-50 rounded-md items-center flex flex-col px-1 py-2 gap-2">
                                <BsImage className="text-3xl group-hover:text-sky-500 duration-300"/>
                                <div className=" text-center flex flex-col gap-1">
                                    <p className=" text-base group-hover:text-sky-500 duration-300">Upload image</p>
                                    <span className=" text-sm text-gray-500">only 5 image </span>
                                    <span className=" text-green-500">1/5</span>
                                </div>
                            </div>
                        </Label>
                        <Input 
                         type="file" 
                         accept="jpg, png, svg" 
                         id="image"
                         className=" input-ty-file hidden"
                        />
                    </div>
                </div>
            </div>
        </form>
     );
}
 
export default CreateNewsCard;