"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const confirmPassword_1 = require("schemas/user/confirmPassword");
const password_1 = require("schemas/user/password");
const username_1 = require("schemas/user/username");
const zod_1 = require("zod");
const signUpFormSchema = zod_1.z
    .object({
    username: username_1.usernameSchema,
    password: password_1.passwordSchema,
    confirmPassword: confirmPassword_1.confirmPasswordSchema,
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
