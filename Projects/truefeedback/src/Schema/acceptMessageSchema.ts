// src/Schema/acceptMessageSchema.ts

import { z } from "zod";

// Schema to validate user's message acceptance preference (true/false)
export const acceptMessageSchema = z.object({
  acceptMessage: z.boolean(),
});
