"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportIdSchema = void 0;
const zod_1 = require("zod");
exports.reportIdSchema = zod_1.z.object({
    reportId: zod_1.z.string(),
});
