"use client"

import { useCallback, useState } from "react";
import FamilyRegisterInput from "./Family-register-input";
import { FieldValues, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FamilyRegisterTextarea from "./Family-register-textarea";
import { Button } from "@/components/ui/button";

interface FamilyRegisterFormProps {
    familyName : string;
}

type Variant = "Login"  | "Register"

const FamilyRegisterForm: React.FC<FamilyRegisterFormProps> = ({
    familyName,
 }) => {
    const [variant , setVariant] = useState<Variant>("Register");
    const [isLoading , setIsLoading] = useState<boolean>(false);

    const {register , handleSubmit, formState : {errors}} = useForm<FieldValues>({
        defaultValues : {
            fullName : "",
            email : "",
            password: "",
            age : "",
            description : "",
        }
    })
   
    return ( 
        <>
         <p className=" text-gray-500 text-sm  text-center">welcome {variant === "Login" ? "welcome back friend ": " and create account in"} {familyName} </p>
         <form 
         className=" w-[540px] border border-sky-500 rounded-md p-2 max-md:w-screen bg-white shadow-lg dark:bg-gray-900  flex-col gap-4 py-3 mt-2"
         >
            {variant === "Register" && (
                <FamilyRegisterInput 
                 label="Your fully name "
                 id="fullName"
                 disabled= {isLoading}
                 register = {register}
                 errors={errors}
                 placeholder = "Your names "
                />
            )}
            <FamilyRegisterInput 
                label="Your email"
                id="email"
                disabled= {isLoading}
                register = {register}
                errors={errors}
                type="email"
                placeholder="email@gmail.com"
            />
            {variant === "Register" && (
                <div>
                    <FamilyRegisterTextarea
                     disabled= {isLoading}
                     register = {register}
                     errors={errors}
                     label="Why do you want to join family"
                     id="description"
                    />
                </div>
            )}
            <div className=" mt-2">
                <FamilyRegisterInput 
                    label="Create Password"
                    id="password"
                    disabled= {isLoading}
                    register = {register}
                    errors={errors}
                    type="password"
                    placeholder="Create new password"
                />
            </div>
            <Button className=" btn w-full mt-3 hover:bg-sky-500 dark:bg-sky-800 dark:text-white text-black bg-sky-300 border-none shadow-lg duration-300 ">
                Register
            </Button>
         </form>
        </>
     );
}
 
export default FamilyRegisterForm;