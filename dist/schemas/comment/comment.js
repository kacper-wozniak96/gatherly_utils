"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
const zod_1 = require("zod");
exports.commentSchema = zod_1.z.object({
    comment: zod_1.z
        .string()
        .trim()
        .min(1, { message: "Comment must be at least 1 character long " })
        .max(5000, { message: "Comment must be at most 5000 characters long" }),
});
