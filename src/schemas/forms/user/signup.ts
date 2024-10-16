import { confirmPasswordSchema } from "schemas/user/confirmPassword";
import { passwordSchema } from "schemas/user/password";
import { usernameSchema } from "schemas/user/username";
import { z } from "zod";

const signUpFormSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
