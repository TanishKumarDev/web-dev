// src/actions/sendVerificationEmail.ts

import { resend } from "@/lib/resend";
import VerificationEmail from "@/emails/VerificationEmail";

export async function sendVerificationEmail({ email, username, otp }: { email: string, username: string, otp: string }) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@yourdomain.com",
      to: email,
      subject: "Your Verification Code",
      react: VerificationEmail({ username, otp }),
    });

    return data;
  } catch (error) {
    console.error("Failed to send verification email", error);
    throw error;
  }
}
