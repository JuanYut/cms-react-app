import { z } from "zod";

export const contactTypeOptions = [
  "Family",
  "Work",
  "Friend",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "First name required." })
    .min(3, { message: "Minimum length of 3." }),
  lastname: z
    .string()
    .min(1, { message: "Last name required." })
    .min(3, { message: "Minimum length of 3." }),
  email: z
    .string()
    .min(1, { message: "Email required." })
    .email("Invalid email."),
  type: z.enum(contactTypeOptions, {
    errorMap: () => ({ message: "Select a type." }),
  }),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };
