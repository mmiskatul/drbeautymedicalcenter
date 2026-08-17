import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const baseFields = {
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30)
    .regex(/^[+()\d\s-]+$/, "Phone can only contain digits and + ( ) - characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  preferredDate: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  // Honeypot: must stay empty (basic spam protection).
  company: z.string().max(0).optional().or(z.literal("")),
};

export const contactSchema = z.object(baseFields);

export const appointmentSchema = z.object({
  ...baseFields,
  preferredTime: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type AppointmentInput = z.infer<typeof appointmentSchema>;

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) return { ok: true as const, reference: null };
    const reference = `C-${Date.now().toString(36).toUpperCase()}`;
    console.info("[contact-inquiry]", reference, { name: data.fullName, date: data.preferredDate });
    return { ok: true as const, reference };
  });

export const submitAppointmentRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => appointmentSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) return { ok: true as const, reference: null };
    const reference = `A-${Date.now().toString(36).toUpperCase()}`;
    console.info("[appointment-request]", reference, {
      name: data.fullName,
      date: data.preferredDate,
      time: data.preferredTime,
      service: data.service,
    });
    return { ok: true as const, reference };
  });
