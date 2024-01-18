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

interface Props {
  User: {
    id: string;
    objectId: string;
    username: string;
    socialAccount: string;
    avatar: string;
    name: string;
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
    fieldChange: (value: string) => void
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
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white dark:bg-gray-900"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt="profile photo"
                    height={96}
                    width={96}
                    className=" rounded-full object-cover"
                  />
                ) : (
                  <Image
                    src="/bruno.jpg"
                    alt="profile image"
                    height={96}
                    width={96}
                    className=" rounded-full object-cover"
                    onClick={(e) => handleImage(e, field.onChange)}
                  />
                )}
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="upload a photo"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default OnBoardingCard;
