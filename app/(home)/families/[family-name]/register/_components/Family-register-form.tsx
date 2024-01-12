"use client"

import { useCallback, useState } from "react";
import FamilyRegisterInput from "./Family-register-input";
import { FieldValues, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FamilyRegisterTextarea from "./Family-register-textarea";
import { Button } from "@/components/ui/button";
import FamilyRegisterSocialButton from "./Family-register-social-button";
import { BsGithub, BsGoogle } from "react-icons/bs";

interface FamilyRegisterFormProps {
    familyName : string;
}

type Variant = "Login"  | "Register"

const FamilyRegisterForm: React.FC<FamilyRegisterFormProps> = ({
    familyName,
 }) => {
    const [variant , setVariant] = useState<Variant>("Login");
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

    const toggleVariant = useCallback(() => {
        if (variant === "Login") {
            setVariant("Register")
        } else {
            setVariant("Login")
        }
    },[variant])
   
    return ( 
        <div>
            <p className=" text-gray-500 text-sm  text-center">welcome {variant === "Login" ? "welcome back friend ": " and create account in "} {familyName}
                <button onClick={toggleVariant} className=" ml-2 text-sky-500 underline">
                    {variant === "Login" ? "Create account" : " Login"}
                </button>
            </p>
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
                 placeholder = "Your names"
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
                {variant === "Login" ? "Login" : "Register"}
            </Button>
         </form>
         {/* providers */}
         <div className=" mt-4">
            <div className=" h-[1px] w-full bg-gray-500"/>
            <span className=" text-gray-500 px-2 absolute block text-center ml-56 -mt-3 text-sm bg-gray-200 dark:bg-gray-950 ">Or continue with</span>
            {/* providers option */}
            <div className=" flex w-full items-center justify-center  gap-3 mt-4 border-none ">
                <FamilyRegisterSocialButton
                 icon={BsGoogle}
                 onClick={() => {}}
                />
                <FamilyRegisterSocialButton
                 icon={BsGithub}
                 onClick={() => {}}
                />
            </div>
         </div>
         {/* styling challenge */}
         {variant === "Login" && (
            <div className=" h-16 max-md:h-12">
            </div>
         )}
        </div>
     );
}
 
export default FamilyRegisterForm;