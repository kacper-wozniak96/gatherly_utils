import { z } from "zod";

export const usernameSchema = z
  .string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
  })
  .min(3, { message: "Username must be at least 3 characters long" })
  .max(30, { message: "Username must be at most 30 characters long" });
