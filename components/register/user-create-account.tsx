"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios"; // Assuming you have Axios for making API requests

const UserCreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend to create a new user
      const response = await axios.post("/api/users", {
        name,
        email,
        password,
        username: email, // You might want to modify this based on your requirements
      });

      console.log("User created successfully", response.data);

      // Redirect or perform other actions after successful account creation
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  return (
    <form
      className="flex gap-8 flex-col"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="full name"
        className="bg-transparent outline-none text-sky-950 text-lg dark:text-white border-b-2 border-sky-400 w-96 px-2"
        autoFocus
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="your email"
        className="bg-transparent outline-none text-sky-950 text-lg dark:text-white border-b-2 border-sky-400 w-96 px-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="your password"
        className="bg-transparent outline-none text-sky-950 text-lg dark:text-white border-b-2 border-sky-400 w-96 px-2"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="btn bg-sky-400 border-none shadow-md">
        Create Account
      </Button>
      <Link href={"/login"} className="text-gray-500 group">
        if you have Account you can{" "}
        <span className="text-sky-400 group-hover:text-white duration-300">
          Login
        </span>
      </Link>
    </form>
  );
};

export default UserCreateAccount;
