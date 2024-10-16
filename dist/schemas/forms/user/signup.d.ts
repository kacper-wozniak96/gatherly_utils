import { z } from "zod";
declare const signUpFormSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username?: string;
    password?: string;
    confirmPassword?: string;
}, {
    username?: string;
    password?: string;
    confirmPassword?: string;
}>, {
    username?: string;
    password?: string;
    confirmPassword?: string;
}, {
    username?: string;
    password?: string;
    confirmPassword?: string;
}>;
export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
export {};
