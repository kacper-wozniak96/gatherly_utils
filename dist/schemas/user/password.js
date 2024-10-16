"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordSchema = void 0;
const zod_1 = require("zod");
exports.passwordSchema = zod_1.z
    .string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
})
    .min(1, { message: "Password must be at least 1 character long" })
    .max(30, { message: "Password must be at most 30 characters long" });
