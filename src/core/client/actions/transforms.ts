import type { Client } from '../client'

export const getName = (client: Client): string =>
  client.isCompany
    ? client.companyName
    : `${client.firstName} ${client.lastName}`
