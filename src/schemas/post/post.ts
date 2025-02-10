import { z } from "zod";

export const postTitleSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Post title must be at least 3 character long" })
    .max(1000, { message: "Post title must be at most 1000 character long" }),
});

export const postTextSchema = z.object({
  text: z
    .string()
    .max(5000, { message: "Post text must be at most 5000 character long" }),
});
