"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usernameSchema = void 0;
const zod_1 = require("zod");
exports.usernameSchema = zod_1.z
    .string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
})
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(30, { message: "Username must be at most 30 characters long" });
