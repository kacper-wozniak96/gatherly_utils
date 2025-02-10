import { z } from "zod";
export declare const commentSchema: z.ZodObject<{
    comment: z.ZodString;
}, "strip", z.ZodTypeAny, {
    comment?: string;
}, {
    comment?: string;
}>;
