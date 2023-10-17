import { z } from 'zod'

import { generateId } from '@core/_internal'

import { ClientSchema, CompanySchema, PersonSchema } from '../client'
import { ContactSchema } from '../contact'

import type { Client } from '../client'

const MinimalSharedClientFields = {
  description: true,
} as const

const MinimalCompanySchema = CompanySchema.pick({
  ...MinimalSharedClientFields,
  isCompany: true,
  companyName: true,
}).extend({
  contact: ContactSchema.partial().optional(),
})

const MinimalPersonSchema = PersonSchema.pick({
  ...MinimalSharedClientFields,
  isCompany: true,
  firstName: true,
  lastName: true,
}).extend({
  contact: ContactSchema.partial().optional(),
})

const CreateClientSchema = z.discriminatedUnion('isCompany', [
  MinimalCompanySchema,
  MinimalPersonSchema,
])

type CreateClient = z.infer<typeof CreateClientSchema>

export const createClient = (data: CreateClient): Client =>
  ClientSchema.parse({
    id: generateId(),
    isCompany: data.isCompany,
    companyName: data.isCompany ? data.companyName : null,
    firstName: data.isCompany ? null : data.firstName,
    lastName: data.isCompany ? null : data.lastName,
    description: data.description,
    contact: {
      phone: data.contact?.phone ?? null,
      email: data.contact?.email ?? null,
      facebook: data.contact?.facebook ?? null,
      instagram: data.contact?.instagram ?? null,
    },
    sourceId: null,
    profilePictureId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

export const createSampleClient = (): Client => {
  const samplePerson = createClient({
    isCompany: false,
    firstName: 'Anna',
    lastName: 'Nowak',
    description: 'Opis klientki',
    contact: {
      email: 'annanowak@gmail.com',
      facebook: 'annanowak',
      instagram: 'annanowak',
      phone: '+48800800800',
    },
  })

  const sampleCompany = createClient({
    isCompany: true,
    companyName: 'Moda SA',
    description: 'Opis klienta',
    contact: {
      email: 'moda@moda.com',
      facebook: 'modasa',
      instagram: 'modasa',
      phone: '+48600600600',
    },
  })

  return Math.random() > 0.3 ? samplePerson : sampleCompany
}
