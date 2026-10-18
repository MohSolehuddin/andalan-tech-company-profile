"use server";

import { contactSchema } from "@/lib/schema/contactSchema";
import { transporter } from "@/lib/utils/transporterMail";
import z from "zod";

export type SendEmailResult = { ok: true } | { ok: false; error: string };

/**
 * sendEmail — v1.0.0
 * Input   : contactSchema { name, email, whatsapp, service, message }
 * Output  : { ok: true } on success; { ok: false, error } on any failure.
 * Throws  : never — every failure path is caught and returned (anti-crash).
 */
export const sendEmail = async (
  input: z.infer<typeof contactSchema>
): Promise<SendEmailResult> => {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Data yang Anda kirim tidak valid." };
  }

  const { name, email, whatsapp, service, message } = parsed.data;
  const to = process.env.MAIL_TO;

  if (!to) {
    console.error("[sendEmail] MAIL_TO is not configured");
    return { ok: false, error: "Layanan email belum dikonfigurasi." };
  }

  try {
    await transporter.sendMail({
      from: `Hello Andalan Tech <${
        process.env.MAIL_USERNAME ?? "hello@andalan.tech"
      }>`,
      to,
      subject: `${name} - Message from web andalan.tech`,
      text: `
    Name: ${name}
    Email: ${email}
    WhatsApp: ${whatsapp}
    Service: ${service}

    
    Message:

    ${message}
    `,
    });
    return { ok: true };
  } catch (error) {
    console.error("[sendEmail] failed to send mail:", error);
    return {
      ok: false,
      error:
        "Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.",
    };
  }
};
