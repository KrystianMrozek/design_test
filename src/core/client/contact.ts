import { z } from 'zod'

export const ContactSchema = z.object({
  phone: z.string().nullable(),
  email: z.string().nullable(),
  facebook: z.string().nullable(),
  instagram: z.string().nullable(),
})

export type Contact = z.infer<typeof ContactSchema>
