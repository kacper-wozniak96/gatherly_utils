import { z } from "zod";

const signUpFormSchema = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
      })
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(30, { message: "Username must be at most 30 characters long" }),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(1, { message: "Password must be at least 1 character long" })
      .max(30, { message: "Password must be at most 30 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set the path of the error to the confirmPassword field
  });

type SignUpFormValues = z.infer<typeof signUpFormSchema>;
