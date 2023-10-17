import { getName } from '@core/client'
import { clients } from '@data/db'

const person = clients.base[0]
const company = clients.base[1]

describe('Clients feature allows to', () => {
  before(() => {
    cy.resetDB()
  })

  it('browse client list', () => {
    cy.visit('/clients')
    cy.getId('page-clients').should('exist')
    cy.getClass('client').should('have.length', clients.base.length)
    cy.getUid(person.id).should('exist')
    cy.getClass('client-type').should('have.length', clients.base.length)
    cy.getUid(person.id).getClass('client-type').should('exist')
    cy.getUid(person.id)
      .getClass('client-name')
      .should('have.text', getName(person))
    cy.getUid(company.id)
      .getClass('client-name')
      .should('have.text', getName(company))
  })

  it('browse a client', () => {
    cy.visit('/clients')
    cy.getUid(person.id).click()
    cy.getId('page-client').should('exist')
    cy.getClass('client-first-name').should('have.text', person.firstName)
    cy.getClass('client-last-name').should('have.text', person.lastName)
    cy.getClass('client-phone').should('have.text', person.contact.phone)
    cy.getId('button-back').click()
    cy.getId('page-clients').should('exist')
    cy.getUid(company.id).click()
    cy.getClass('client-company-name').should('have.text', company.companyName)
    cy.getClass('client-email').should('have.text', company.contact.email)
  })
})
