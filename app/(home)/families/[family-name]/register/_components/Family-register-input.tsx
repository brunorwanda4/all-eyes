"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label : string;
    id : string;
    placeholder : string;
    type ?: string;
    required ?: boolean;
    register: UseFormRegister<FieldValues>;
    errors : FieldErrors;
    disabled?: boolean;
}

const FamilyRegisterInput : React.FC<InputProps> = ({
    label , id , type = "text", required , register , errors , placeholder, disabled
}) => {
    return ( 
        <div className=" flex flex-col bg-transparent border-b-sky-500  ">
            <Label htmlFor={id} className=" text-sm block leading-6 label text-gray-500">
                {label}
            </Label>
            <Input 
             type={type}
             id={id}
             autoComplete={id}
             disabled = {disabled}
             {...register(id, {required})}
             className={clsx (" focus:border-sky-500 ring-sky-500  dark:border-gray-500 border-sky-500 input", errors ? "" : "")}
             placeholder={placeholder}
            />
        </div>
     );
}
 
export default FamilyRegisterInput;