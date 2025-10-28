import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(100),
  email: z.string().email("Email tidak valid"),
  whatsapp: z
    .string()
    .regex(
      /^(\+62|62|0)[0-9]{9,12}$/,
      "Format WhatsApp tidak valid (contoh: 081234567890)"
    ),
  service: z.string().min(1, "Pilih jenis layanan"),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(1000),
});
