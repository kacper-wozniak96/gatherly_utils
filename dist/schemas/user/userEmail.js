"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEmailSchema = void 0;
const zod_1 = require("zod");
exports.userEmailSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .email({ message: "Invalid email address" }),
});
