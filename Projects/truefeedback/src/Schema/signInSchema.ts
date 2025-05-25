// src/Schema/signUpSchema.ts

import { z } from "zod";

// Schema for user sign-in validation
export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),

  identifier: z
    .string() // You might want to add validation rules here based on what "identifier" represents
});
