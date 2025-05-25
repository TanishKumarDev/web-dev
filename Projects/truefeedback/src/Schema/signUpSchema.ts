// src/Schema/signUpSchema.ts

import { z } from "zod";

// Username validation rules
export const usernamevalidation = z
  .string()
  .min(3, { message: "Username must be at least 3 characters long" })
  .max(20, { message: "Username must be at most 20 characters long" })
  .regex(/^[a-zA-Z0-9_]+$/, {
    message: "Username can only contain letters, numbers, and underscores",
  });

// Sign-up form schema validation using Zod
export const signupSchema = z.object({
  username: usernamevalidation,                      // Validates username format
  email: z.string().email({ message: "Invalid email address" }), // Must be a valid email
  password: z.string().min(8, {                      // Enforces minimum password length
    message: "Password must be at least 8 characters long",
  }),
});

// Use this schema in routes, controllers, or client-side form validation
