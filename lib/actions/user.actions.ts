"use server";

import UserSchemaDB from "../models/User";
import { connectMongoDB } from "../mongodb";
import { revalidatePath } from "next/cache";

export async function updateUser(
  userId: string,
  username: string,
  name: string,
  socialAccount: string,
  phoneNumber: string,
  image: string,
  path: string,
): Promise<void> {
  connectMongoDB();

  try {
    await UserSchemaDB.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        socialAccount,
        phoneNumber,
        image,
      },
      { upsert: true },
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error("some thing wet log to create / update 🥺😡😔", error);
  }
}
