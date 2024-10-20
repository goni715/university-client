import { z } from "zod";

export const LoginSchema = z.object({
  id: z
    .string({ required_error: "ID is required" })
    .min(1, { message: "ID is reuired" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be minimum 6 characters" })
    .max(20, { message: "Password can't be more than 20 characters"})
});
