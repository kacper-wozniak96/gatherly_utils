"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPasswordSchema = void 0;
const zod_1 = require("zod");
exports.confirmPasswordSchema = zod_1.z.object({
    confirmPassword: zod_1.z.string(),
});
