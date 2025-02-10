import { z } from "zod";

export const passwordSchema = z.object({
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(1, { message: "Password must be at least 1 character long" })
    .max(30, { message: "Password must be at most 30 characters long" }),
});
