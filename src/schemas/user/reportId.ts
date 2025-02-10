import { z } from "zod";

export const reportIdSchema = z.object({
  reportId: z.string(),
});
