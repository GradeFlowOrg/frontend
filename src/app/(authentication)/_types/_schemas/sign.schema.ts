import { z } from "zod";

export const signupSchema = z
  .object({
    role: z.enum(["student", "teacher"], {
      error: "Please select a role.",
    }),
    fullName: z.string().min(5, "Full name must be at least 5 characters."),
    email: z.string().email("Please enter a valid email address."),
    verificationCode: z
      .string()
      .trim()
      .length(6, "Verification code must be 6 characters."),
    username: z
      .string()
      .min(5, "Username must be at least 5 characters.")
      .max(20, "Username must be at most 20 characters."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(32, "Password must be at most 32 characters."),
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms to continue.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type SignupFormField = z.infer<typeof signupSchema>;
