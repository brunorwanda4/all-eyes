"use client"

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BsGithub, BsGoogle } from "react-icons/bs";
import FamilyRegisterInput from "@/app/(home)/families/[family-name]/register/_components/Family-register-input";
import FamilyRegisterTextarea from "@/app/(home)/families/[family-name]/register/_components/Family-register-textarea";
import FamilyRegisterSocialButton from "@/app/(home)/families/[family-name]/register/_components/Family-register-social-button";
import { Input } from "../ui/input";
import {toast} from "react-hot-toast";
import { signIn } from "next-auth/react"


type Variant = "Login"  | "Register"

const UserRegister: React.FC = () => {
    const [variant , setVariant] = useState<Variant>("Login");
    const [isLoading , setIsLoading] = useState<boolean>(false);

    const {register , handleSubmit, formState : {errors}} = useForm<FieldValues>({
        defaultValues : {
            name: "",
            email : "",
            password: "",
        }
    })

    const toggleVariant = useCallback(() => {
        if (variant === "Login") {
            setVariant("Register")
        } else {
            setVariant("Login")
        }
    },[variant])

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === "Register"){
            axios.post("/api/register" , data)
            .catch(() => toast.error("something wait log 😭😭"))
            .finally(() => setIsLoading(false))
        }
        if (variant === "Login" ) {
            signIn("credentials", {
                ...data,
                redirect: false,
            })
            .then((callback)=> {
                if(callback?.error) {
                    toast.error("Invalid credentials 😣");
                }
                if(callback?.ok) {
                    toast.success("welcome back 😄😄")
                }
            }).finally(() => setIsLoading(false))
        }
    }
   
    return ( 
        <div className=" mx-3">
         <form 
         className=" w-[540px]  rounded-md p-2 max-md:w-screen bg-white shadow-lg dark:bg-gray-900  flex-col gap-4 py-3 mt-2"
         onSubmit={handleSubmit(onSubmit)}
         >
            {variant === "Register" && (
                <FamilyRegisterInput
                 label="Your full name "
                 id="name"
                 disabled= {isLoading}
                 register = {register}
                 errors={errors}
                 placeholder = "Your names"
                />
            )}
            <FamilyRegisterInput 
                label={variant === "Login" ? "Email or username" : "Email "}
                id="email"
                disabled= {isLoading}
                register = {register}
                errors={errors}
                type="email"
                placeholder={variant === "Login" ? "Email or username" : "example@gmail.com"}
            />
            {variant === "Register" && (
               <div className=" mt-2">
                    <div className=" w-full items-center gap-3 flex justify-start">
                        <div className=" flex gap-2 items-center  ">
                            <Label htmlFor="gender" className="text-sm text-gray-500">Male</Label>
                            <Input type="radio" name="gender" className=" h-4 w-4 input-bordered "/>
                        </div>
                        <div className=" flex gap-2 items-center  ">
                            <Label htmlFor="gender" className="text-sm text-gray-500">Female</Label>
                            <Input type="radio" name="gender" className=" h-4 w-4 input-bordered "/>
                        </div>
                    </div>
               </div>
            )}
            <div className=" mt-1">
                <FamilyRegisterInput 
                    label="Password"
                    id="password"
                    disabled= {isLoading}
                    register = {register}
                    errors={errors}
                    type="password"
                    placeholder="Password"
                />
            </div>
            <Button className=" btn w-full mt-3 hover:bg-sky-500 dark:bg-sky-800 dark:text-white text-black bg-sky-300 border-none shadow-lg duration-300 ">
                {variant === "Login" ? "Login" : "Create account"}
            </Button>
         </form>
         {/* login */}
         <p className=" text-gray-500 text-sm  text-center">welcome {variant === "Login" ? "welcome back friend ": " and create account in "}
                <button onClick={toggleVariant} className=" ml-2 text-sky-500 underline">
                    {variant === "Login" ? "Create account" : " Login"}
                </button>
            </p>
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
        </div>
     );
}
 
export default UserRegister;

