"use server";

import { contactSchema } from "@/lib/schema/contactSchema";
import { transporter } from "@/lib/utils/transporterMail";
import z from "zod";

export const sendEmail = async ({
  name,
  email,
  whatsapp,
  service,
  message,
}: z.infer<typeof contactSchema>) => {
  await transporter.sendMail({
    from: `Hello Andalan Tech <${
      process.env.MAIL_USERNAME ?? "hello@andalan.tech"
    }>`,
    to: process.env.MAIL_TO ?? "solehuddin@andalan.tech",
    subject: `${name} - Message from web andalan.tech`,
    text: `
    Name: ${name}
    Email: ${email}
    WhatsApp: ${whatsapp}
    service: ${service}

    
    Message:

    ${message}
    `,
  });
};
