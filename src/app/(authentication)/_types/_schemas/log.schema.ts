import { z } from "zod";

export const loginSchema = z.object({
  identifier: z.string().min(5, "Must be at least 5 characters.").or(
    z.string().email("Must be a valid email address.")
  ),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters.")
    .max(20, "Password must be at most 20 characters."),
});

export type LoginFormField = z.infer<typeof loginSchema>;