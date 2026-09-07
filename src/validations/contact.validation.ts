import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor HP minimal 13 digit"),
  reason: z.string().min(5, "Alasan wajib diisi"),
});