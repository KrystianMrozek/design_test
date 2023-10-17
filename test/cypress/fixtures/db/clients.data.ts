import type { TestData } from './types'
import type { Client } from '@core/client'

export const clients: TestData<Client> = {
  base: [
    {
      companyName: null,
      contact: {
        email: null,
        facebook: null,
        instagram: null,
        phone: '+48666666666',
      },
      createdAt: new Date(),
      description: 'Opis klientki',
      firstName: 'Anna',
      id: 'k17sx7qlgf0nf8uorhyxcgh1',
      isCompany: false,
      lastName: 'Nowak',
      profilePictureId: null,
      sourceId: null,
      updatedAt: new Date(),
    },
    {
      companyName: 'Moda SA',
      contact: {
        email: 'moda@moda.com',
        facebook: null,
        instagram: null,
        phone: null,
      },
      createdAt: new Date(),
      description: 'Opis klienta',
      firstName: null,
      id: 'k17sx7qlgf0nf8uorhyxcgh2',
      isCompany: true,
      lastName: null,
      profilePictureId: null,
      sourceId: null,
      updatedAt: new Date(),
    },
  ],
  new: [],
} as const
