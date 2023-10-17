import { db } from '@/db'
import { clients } from '@data/db'

declare global {
  namespace Cypress {
    interface Chainable {
      resetDB(): void
    }
  }
}

Cypress.Commands.add('resetDB', () => {
  cy.visit('/')
  cy.wrap('resetDB').then(async () => {
    await db.transaction('rw', [db.clients], async () => {
      await db.clients.clear()
      await db.clients.bulkPut(clients.base)
    })
    cy.log('Database was reseted')
  })
})
