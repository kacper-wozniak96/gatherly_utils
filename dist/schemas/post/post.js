"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTextSchema = exports.postTitleSchema = void 0;
const zod_1 = require("zod");
exports.postTitleSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(3, { message: "Post title must be at least 3 character long" })
        .max(1000, { message: "Post title must be at most 1000 character long" }),
});
exports.postTextSchema = zod_1.z.object({
    text: zod_1.z
        .string()
        .max(5000, { message: "Post text must be at most 5000 character long" }),
});
