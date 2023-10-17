import Dexie from 'dexie'

import { DB } from '@config'

import type { Client } from '@core/client'
import type { Table } from 'dexie'

export class Database extends Dexie {
  clients!: Table<Client>

  constructor() {
    super(DB.NAME)
    this.version(1).stores({
      clients:
        'id, firstName, lastName, companyName, description, contact, sourceId',
    })
  }
}

export const db = new Database()
