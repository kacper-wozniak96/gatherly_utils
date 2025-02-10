import { z } from "zod";
export declare const postTitleSchema: z.ZodObject<{
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title?: string;
}, {
    title?: string;
}>;
export declare const postTextSchema: z.ZodObject<{
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text?: string;
}, {
    text?: string;
}>;
