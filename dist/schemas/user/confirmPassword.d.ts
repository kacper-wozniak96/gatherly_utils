import { z } from "zod";
export declare const confirmPasswordSchema: z.ZodObject<{
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    confirmPassword?: string;
}, {
    confirmPassword?: string;
}>;
