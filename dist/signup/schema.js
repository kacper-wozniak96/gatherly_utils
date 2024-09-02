"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const signUpFormSchema = zod_1.z
    .object({
    username: zod_1.z
        .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
    })
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(30, { message: "Username must be at most 30 characters long" }),
    password: zod_1.z
        .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    })
        .min(1, { message: "Password must be at least 1 character long" })
        .max(30, { message: "Password must be at most 30 characters long" }),
    confirmPassword: zod_1.z.string(),
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
