// src/Schema/verifySchema.ts

import { z } from "zod"; // Zod is used for schema validation

// Schema to validate fields during verification step (e.g., signup or email confirmation)
export const verifySchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),

  email: z
    .string()
    .email({ message: "Invalid email format" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),

  verifyCode: z
    .string()
    .min(6, { message: "Verification code must be at least 6 characters long" }),
});
