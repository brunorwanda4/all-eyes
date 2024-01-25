"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import userValidation from "@/lib/validations/user";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Label } from "../ui/label";
import { BsCamera, BsInstagram } from "react-icons/bs";

interface Props {
  User: {
    id: string;
    objectId: string;
    username: string;
    socialAccount: string;
    avatar: string;
    name: string;
    phoneNumber: string;
  };
  btnTitle: string;
}

const OnBoardingCard = ({ User, btnTitle }: Props) => {
  const [file, setFile] = useState<File[]>([]);
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  // upload image
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void,
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const form = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      username: User?.username || "",
      name: User?.name || "",
      avatar: User?.avatar || "",
      socialAccount: User?.socialAccount || "",
      phoneNumber: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white dark:bg-gray-900 w-[750px] rounded-md shadow-lg px-4 py-2 "
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className=" flex  gap-4 items-center">
                <FormLabel
                  htmlFor=" image"
                  className=" flex items-center gap-4 "
                >
                  {field.value ? (
                    <Image
                      src={field.value}
                      alt="profile photo"
                      height={96}
                      width={96}
                      className=" rounded-full object-cover cursor-pointer "
                    />
                  ) : (
                    <Image
                      src="/bruno.jpg"
                      alt="profile image"
                      height={96}
                      width={96}
                      className=" rounded-full object-cover cursor-pointer "
                      onClick={(e) => handleImage(e, field.onChange)}
                    />
                  )}
                  <label
                    htmlFor="image"
                    className=" label cursor-pointer flex gap-3 text-lg  text-gray-500 "
                  >
                    <span>Upload profile image</span>
                    <BsCamera className="text-sky-500 text-xl " />
                  </label>
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    placeholder="upload a photo"
                    id="image"
                    className=" hidden"
                  />
                </FormControl>
              </div>
              <div className=" flex  w-full gap-2 ">
                <div className=" w-full flex flex-col gap-2 ">
                  <div className=" flex flex-col mt-6 gap-2">
                    {/* full name */}
                    <FormLabel className={" text-sm text-gray-500 "}>
                      Your full name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        pattern="[A-Za-z]+"
                        autoFocus
                        className=" w-full"
                      />
                    </FormControl>
                  </div>
                  {/* username */}
                  <div className=" flex flex-col mt-4 gap-2">
                    <FormLabel className={" text-sm text-gray-500 "}>
                      Your username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="username"
                        pattern="[A-Za-z]+"
                        className=" w-full"
                      />
                    </FormControl>
                  </div>
                </div>
                {/* phone number */}
                <div className=" w-full flex flex-col gap-2 ">
                  <div className=" flex flex-col mt-4 gap-2">
                    <FormLabel className={" text-sm text-gray-500 "}>
                      Your phone number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="+250 792 537 274"
                        className=" w-full"
                      />
                    </FormControl>
                  </div>
                  {/*  social account */}
                  <div className=" flex flex-col mt-4 gap-2">
                    <FormLabel className={" text-sm text-gray-500 "}>
                      Your social account
                    </FormLabel>
                    <div className=" flex gap-2 items-center">
                      {/* icon */}
                      <FormControl>
                        <Input
                          placeholder="username on Instagram"
                          className=" w-full"
                        />
                        <BsInstagram className=" text-4xl text-gray-500 " />
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" w-full dark:bg-gray-800 hover:dark:bg-sky-500 duration-300 dark:text-white bg-sky-200 text-black hover:bg-sky-500"
        >
          Create
        </Button>
      </form>
    </Form>
  );
};

export default OnBoardingCard;
