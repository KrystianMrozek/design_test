import { z } from 'zod'

import { ContactSchema } from './contact'

const SharedClientSchema = z.object({
  id: z.string().cuid2(),
  description: z.string(),
  contact: ContactSchema,
  sourceId: z.string().cuid2().nullable(),
  profilePictureId: z.string().cuid2().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const CompanySchema = SharedClientSchema.extend({
  isCompany: z.literal(true),
  companyName: z.string(),
  firstName: z.null(),
  lastName: z.null(),
})

export const PersonSchema = SharedClientSchema.extend({
  isCompany: z.literal(false),
  firstName: z.string(),
  lastName: z.string(),
  companyName: z.null(),
})

export const ClientSchema = z.discriminatedUnion('isCompany', [
  CompanySchema,
  PersonSchema,
])

export type Client = z.infer<typeof ClientSchema>
