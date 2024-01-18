import * as z from "zod";

export const userValidation = z.object({
    avatar: z.string().url().nonempty(),
    name:z.string().min(3 , "Username must be at least 2 characters.").max(50 , "maximum length is 50"),
    username:z.string().min(3 , "Username must be at least 1 characters.").max(30 , "maximum length is 50"),
    socialAccount:z.string().min(5).max(1000), 
})

export default userValidation