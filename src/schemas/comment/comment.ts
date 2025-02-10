import { z } from "zod";

export const commentSchema = z.object({
  comment: z
    .string()
    .trim()
    .min(1, { message: "Comment must be at least 1 character long " })
    .max(5000, { message: "Comment must be at most 5000 characters long" }),
});
