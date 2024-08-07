import { z } from "zod";

export const signInSchema = z.object({
  identifier: z.string().min(1, "email or username is required!"),
  password: z.string().min(1, "password is required!"),
});
